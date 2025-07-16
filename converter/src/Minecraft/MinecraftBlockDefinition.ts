import { MinecraftBlock } from "./MinecraftBlockReference";
import { BlockTranslation } from "../translation/BlockTranslation";

const BLOCK_STATE_ID_PATTERN = /^(?<id>minecraft:[\w]+)(?:\[(?<blockstates>(?:\w+=\w+(?:,)?)+)\])?/;
type BLOCK_STATE_ID_PATTERN = {
    id: MinecraftBlock.Id;
    blockstates?: string;
}

export class MinecraftBlockDefinition<T extends MinecraftBlock.Id> {

    /** The raw Minecraft block ID. */
    public id: T;

    /** A map of properties and states that define the block's state */
    public blockStates?: BlockTranslation.PropertyStateMap<T>;

    constructor(id: T, blockStates?: BlockTranslation.PropertyStateMap<T>) {
        this.id = id;
        this.blockStates = blockStates;
    }

    /**
     * Returns the Minecraft block ID along with its block states, if any.  
     * `minecraft:block[property=state,...]`
     */
    public get blockStateId() {
        if (this.blockStates === undefined) return this.id;

        const propertyStates: string[] = [];
        for (const property of Object.keys(this.blockStates)) {
            const state = this.blockStates[property as keyof typeof this.blockStates];
            propertyStates.push(`${property}=${state}`);
        }

        return `${this.id}[${propertyStates.sort().join(',')}]`;
    }

    /**
     * Acts as a filter, checking if the target's id and property states match.
     * @param block The Minecraft block ID, or {@link MinecraftBlockDefinition} to check.
     * @param blockStates The blockstates to check; not required if a {@link MinecraftBlockDefinition} is provided.
     * @param strict Make sure this matches the target exacty. Missing blockstates from the target will fail the check.
     * @example
     * ```
     * 
     * const primary = 'minecraft:block_id[property1=true,property2=5]';
     * 
     * const target1 = 'minecraft:block_id[property1=true,property2=5]';                        // Pass
     * const target2 = 'minecraft:block_id[property1=true,property2=5,property3=something]';    // Pass
     * 
     * const target3 = 'minecraft:block_id[property1=false,property2=5]';                       // Fail
     * const target4 = 'minecraft:block_id';                                                    // Fail
     * 
     * ```
     */
    public matches<B extends MinecraftBlockDefinition<any> | MinecraftBlock.Id>(block: B, blockStates?: B extends MinecraftBlock.Id ? BlockTranslation.PropertyStateMap<B> : undefined, strict: boolean = false) {
        const target = (block instanceof MinecraftBlockDefinition) ? block : new MinecraftBlockDefinition(block, blockStates);

        if (this.id !== target.id) return false;
        if (strict &&
            (
                (this.blockStates === undefined && blockStates !== undefined) ||
                (this.blockStates !== undefined && blockStates === undefined) ||
                Object.keys(this.blockStates ?? {}).length !== Object.keys(blockStates ?? {}).length // Property-count mismatch
            )
        ) return false; // Make sure both block states are defined or undefined when strict is true.

        if (this.blockStates === undefined) {
            return true;
        } else {
            if (target.blockStates === undefined) return false; // The target is missing block states that this definition requires.
            
            for (const [property, state] of Object.entries(this.blockStates as {})) {
                if (!(property in target.blockStates)) {
                    console.log(`    Property ${property} is missing from target`);
                    return false; // Target is missing property
                }

                const targetState = target.blockStates[property as keyof typeof target.blockStates];
                console.log(`    Property ${property} > This: ${state} | Target: ${targetState}`);
                if (state !== targetState) {
                    console.log(`    Property ${state} is missing from target`);
                    return false; // Target has incorrect property state
                }
            }
        }

        console.log(`    RETURNING VALID MATCH`);
        return true;
    }

    /**
     * Parse a block state definition into a {@link MinecraftBlockDefinition}.
     * @param blockStateId The block state ID to parse; with or without states.
     * @returns a new {@link MinecraftBlockDefinition}.
     */
    public static parse(blockStateId: string) {
        const match = blockStateId.match(BLOCK_STATE_ID_PATTERN)?.groups as BLOCK_STATE_ID_PATTERN | undefined;

        if (match) {
            const id = match.id as MinecraftBlock.Id;
            const blockStates = match.blockstates;

            if (blockStates) {
                const blockStateMap = {} as Record<string, string>;
                blockStates.split(',').forEach(propertyState => {
                    const [property, state] = propertyState.split('=');
                    blockStateMap[property] = state;
                });

                return new MinecraftBlockDefinition(id, blockStateMap as BlockTranslation.PropertyStateMap<typeof id>);
            }

            return new MinecraftBlockDefinition(id);
        }

        return undefined;
    }

}