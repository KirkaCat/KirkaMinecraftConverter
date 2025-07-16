
import { KirkaBlock } from "../Kirka/KirkaBlockReference";
import { MinecraftBlockDefinition } from "../Minecraft/MinecraftBlockDefinition";
import { MinecraftBlock } from "../Minecraft/MinecraftBlockReference";

export class BlockTranslation {

    /**
     * The Kirka block ID that this translation corresponds to.
     */
    public readonly kirka: KirkaBlock.Id;

    /**
     * The primary Minecraft block definition for this translation.
     * Used to translate both to and from Kirka blocks.
     */
    public readonly minecraft: MinecraftBlockDefinition<any>;

    /**
     * Resolvable Minecraft block definitions for this translation.  
     * Only used to translate to Kirka blocks, not from.
     */
    public readonly resolvable?: MinecraftBlockDefinition<any>[];

    /**
     * A list of target Minecraft block ID that are used for language file generation, overriding the primary ID.  
     * Could be used for other things, but for now: fuck you, potted plants.
     */
    public readonly minecraftLangTargets: MinecraftBlock.Id[];

    public constructor(kirka: KirkaBlock.Id, minecraft: MinecraftBlockDefinition<any>, resolvable?: MinecraftBlockDefinition<any>[], minecraftLangTargets?: MinecraftBlock.Id[]) {
        this.kirka = kirka;
        this.minecraft = minecraft;
        this.resolvable = resolvable;
        this.minecraftLangTargets = minecraftLangTargets ?? [minecraft.id];
    }

    public canTranslate<T extends KirkaBlock.Id | MinecraftBlock.Id>(id: T, blockStates?: T extends MinecraftBlock.Id ? BlockTranslation.PropertyStateMap<T> : never, strict: boolean = false): boolean {
        if (typeof(id) === 'string') {
            return this.minecraft.matches(id, blockStates, strict);
        } else {
            return this.kirka === id;
        }
    }

    public canResolve<T extends MinecraftBlock.Id>(id: T, blockStates?: BlockTranslation.PropertyStateMap<T>, strict: boolean = false): boolean {

        if (this.resolvable === undefined) return false;
        for (const definition of this.resolvable) {
            if (definition.matches<T>(id, blockStates as (T extends MinecraftBlock.Id ? BlockTranslation.PropertyStateMap<T> : undefined), strict)) return true;
        }
        return false;
    }

}

export namespace BlockTranslation {

    export type PropertyStateMap<T extends MinecraftBlock.Id> = {
        [K in MinecraftBlock.PropertyName<T>]: MinecraftBlock.PropertyState<T, K>
    }

    export type MinecraftBlockDefinition = {
        [K in MinecraftBlock.Id]: { id: K } & Partial<PropertyStateMap<K>>
    }[MinecraftBlock.Id]

}