

const DECORATOR_SUFFIX = '___DATA';
const isMappedObject = (value: any) => typeof(value) === 'object' && !Array.isArray(value) && value !== null;

const removeMappedDecoratorSuffix = (data: any): any => {
    if (isMappedObject(data)) {
        const newObj: Record<string, any> = {};
        for (const [key, value] of Object.entries(data) as [string, any]) {
            const correctedKey = key.replace(DECORATOR_SUFFIX, '');
            newObj[correctedKey] = removeMappedDecoratorSuffix(value);
        }
        return newObj;
    } else if (Array.isArray(data)) {
        return data.map(v => removeMappedDecoratorSuffix(v));
    }
    return data;
}


type Decorated<T> = {
  [K in keyof T as `${string & K}${typeof DECORATOR_SUFFIX}`]: T[K] extends object ? Decorated<T[K]> : T[K];
};

function _clone<T extends any>(obj: T): T {
    if (typeof(obj) === 'object' && (obj instanceof Object)) {
        let newData;
        if (Array.isArray(obj)) {
            newData = [];
            for (const value of obj) newData.push(_clone(value));
        } else {
            newData = {} as Record<any, any>;
            for (const key of Object.keys(obj)) {
                const value = obj[key as keyof typeof obj];
                newData[key] = _clone(value);
            }
        }
        return newData as T;
    }
    return obj;
}


type _KirkaMap = KirkaMap.Config.IRequired & Partial<KirkaMap.Config.IOptional> & Partial<KirkaMap.Config.IEnvironment>;
export type KirkaMap<isDecorated extends boolean = boolean> = isDecorated extends true
    ? Decorated<_KirkaMap>
    : (isDecorated extends false ? _KirkaMap : (_KirkaMap | Decorated<_KirkaMap>));

export namespace KirkaMap {

    export const CHUNK_SIZE = 16;
    export const CHUNK_VOLUME = Math.pow(CHUNK_SIZE, 3);

    export namespace Config {

        export type ChunkCoordinate = `${number},${number},${number}`;
        export type ChunkBlock = [positionIndex: number, blockId: number, count: number];
        export type ChunkData = ChunkBlock[];
        export type Chunks = Record<ChunkCoordinate, ChunkData>;

        /** A player spawn position & rotation. */
        export type SpawnPoint = {
            /**
             * The spawn position.
             *  - X & Z axis is forcefully aligned by Kirka to the center of the block (0.5, 0.0, 0.5)
             *  - Y axis has no restrictions and can be precisely placed.
             */
            pos: [x: number, y: number, z: number];
           /**
             * The spawn point's facing direction(s).
             *  - The pitch (up/down) has no affect and is always forced by Kirka to be 0.
             *  - The yaw amount is 0-360, counter-clockwise, in radians (0-6.28319):
             *    - North (-Z): `0.0`
             *    - West (-X): `1.5708`
             *    - South (+Z): `3.14159`
             *    - East (+X): `4.71239`
             */
            rotation: [pitch: number, yaw: number];
        }

        /**
         * Player spawns for the blue and red team.  
         * Color/team does not matter in solo modes, and players will spawn at any spawn point.
         */
        export type SpawnPoints = {
            /** An array of {@link SpawnPoint} for team 1 (Blue Team) */
            firstTeam: SpawnPoint[]
            /** An array of {@link SpawnPoint} for team 2 (Red Team) */
            secondTeam: SpawnPoint[]
        }

        /**
         * Regions extend from it's center potsition; 2.5 blocks X & Z, and 3 blocks Y (5x5x6 total)
         * 
         *  - No placement restrictions and can be placed with precision on any axis.
         *  - Cannot be placed within 15m of each other in the Kirka map editor, but can be overridden manually.
         *  - Multiple purposes & functionality across various gamemodes.
         * 
         * **Search & Destroy (S&D)**
         *  - Used to define where the gem can be placed.
         *  - TODO: Figure out if by placing region so it overlaps 2 blocks, will it allow gem placement in that partially-valid block-position.
         * 
         * **Point**
         *  - As long as the player's feet are within the region, they will gain points.
         *  - Standing on top of the region is valid and will award points.
         *  - In point gamemodes, the point regions switch, going in the order that they appear in the array.
         * 
         * **Parkour**
         *  - A region is used to define a parkour map's end point that completes the course.
         *  - If no region is defined and the map is loaded into a parkour gamemode, one will automatically be created at 0,0,0.
         *  - Only the first region definition (in the array) from the map data is used. All others are ignored, and will not trigger course completion.
         * 
         */
        export type Region = [x: number, y: number, z: number];

        /**
         * A checkpoint for parkour gamemodes; also known as a yellow flag.
         * 
         * Checkpoints act as both a respawn point, and a mini-region that detects when a player steps within it's bounds.  
         * The dimensions are 1x1 and 1.6 blocks both up & down from the center origin (3.2 blocks high total)
         * 
         *  - No positioning restrictions and can be placed precisely on any axis.
         *  - Respawning at a checkpoint will retain your current facing direction.
         *  - Triggering a checkpoint will allow you to re-use and trigger any previous
         *  - The order of placement/appearance (in the array) will affect the message "Player has reached chekpoint X"
         * 
         */
        export type Checkpoint = [x: number, y: number, z: number];


        // -- -- --


        /** Settings that are required for the map config to be considered valid */
        export interface IRequired {
            mapName?: string;
            chunks: Config.Chunks;
            spawnPlaces: Config.SpawnPoints;
        }

        export interface IOptional {
            flagPlaces: KirkaMap.Config.Region[];
            yellowFlagPlaces: Config.Checkpoint[];
        }

        export interface IEnvironment {
            /** Default: 0.6 */
            light: number;
            /** Default: 0.25 */
            blockLight: number;
            /** Default: 0.3 */
            brightness: number;
            /** Default: #ffffff */
            skyboxColor: `#${string}`;
            /** Default: blue */
            skyboxTexture: '' | 'blue' | 'blue-sun';
            /** Default: '' */
            fogColor: '' | `#${string}`;
            /** Default: 0 */
            fogNear: number;
            /** Default: 0 */
            fogFar: number;
            /** Default: #ffffff */
            fogAmbientColor: `#${string}`;
        }


        // -- -- --


        /**
         * Remove TypeScript's decorator suffix from the map data's property keys.
         * @param mapConfig The map config data.
         * @returns the cleaned map data.
         */
        export function clean(mapConfig: any): KirkaMap<false> {
            let data: Record<string, any>;
            if (typeof(mapConfig) === 'string') {
                try {
                    data = JSON.parse(mapConfig);
                } catch {
                    throw new Error("Invalid map data - couldn't parse as valid JSON string.");
                }
            } else if (isMappedObject(mapConfig)) {
                data = mapConfig;
            }
            if (data! === undefined) throw new Error("Invalid map config data.");

            return removeMappedDecoratorSuffix(data) as KirkaMap<false>;
        }

    }

    export namespace ChunkUtils {

        /**
         * Parse a coordinate string to X/Y/Z numbers.
         * @param coord The coord string.
         * @param asTuple Return the coords as a tuple instead of a mapped object. Default: `false`.
         * @returns The parsed chunk coord.
         */
        export function parseCoord<T extends boolean = false>(coord: string, asTuple: T = (false as T)): T extends true ? [ x: number, y: number, z: number ] : { x: number, y: number, z: number } {
            const [x, y, z] = coord.split(',').map(Number);
            return (asTuple ? [ x, y, z ] : { x: x, y: y, z: z }) as any;
        }

        /**
         * Decompress chunk data, separating compressed block definitions into individuals.  
         * Also adds explicit air block definitions in any spaces where there is no block defined. 
         * @param chunkData An array of blocks that belong to the chunk.
         * @param removeAir Whether or not to remove air blocks. Default: `false`.
         * @returns an expanded copy of the chunk data.
         */
        export function expand(chunkData: Config.ChunkData, removeAir: boolean = false) {
            chunkData = _clone(chunkData).sort((a, b) => a[0] - b[0]);

            let [index, blocks]: [number, Config.ChunkBlock[]] = [0, []];
            for (const blockData of chunkData) {
                const [blockPosIndex, blockId, blockCount]: Config.ChunkBlock = [blockData[0], blockData[1], blockData[2]];

                while (index < blockPosIndex) blocks.push([index++, 0, 1]); // Explicitly fill empty spaces wth air blocks
                for (let i = 0; (i < blockCount && index < KirkaMap.CHUNK_VOLUME); i++) blocks.push([index++, blockId, 1 ]); // Separate compressed block definitions
            }
            while (index < KirkaMap.CHUNK_VOLUME) blocks.push([index++, 0, 1]); // Fill any remaining spaces wth air blocks 

            return removeAir ? blocks.filter(block => block[1] > 0) : blocks;
        }

        /**
         * Compress the chunk data, combining sequential blocks of the same type into singular definitions.
         * @param chunkData An array of blocks that belong to the chunk.
         * @param keepAir Whether or not to keep air blocks. Default: `false`.
         * @returns a compressed copy of the chunk data.
         */
        export function compress(chunkData: Config.ChunkData, keepAir: boolean = false) {

            chunkData = _clone(chunkData).sort((a, b) => a[0] - b[0]).filter(block => block[2] > 0) // Sort by position index and remove zero-count blocks
            if (!keepAir) chunkData = chunkData.filter(block => block[1] > 0); // Remove air blocks

            const compressedChunkData: Config.ChunkData = [];

            const chunkDataEntries = chunkData.entries();
            let block = chunkDataEntries.next().value;
            while (block !== undefined) {
                const groupedBlocks: Config.ChunkBlock[] = [];

                let lastBlock;
                do {
                    groupedBlocks.push(block[1]);
                    [ lastBlock, block ] = [ block, chunkDataEntries.next().value ];
                } while (
                    block !== undefined &&
                    (block[1][0] - lastBlock[1][0]) === 1 && // Make sure the next block definition is one more in the block position index.
                    block[1][1] === lastBlock[1][1] // Make sure the block ID is the same as the last
                )

                const compressedBlock = groupedBlocks[0];
                for (let i = 1; i < groupedBlocks.length; i++) compressedBlock[2] += groupedBlocks[i][2];
                compressedChunkData.push(compressedBlock);
            }

            return compressedChunkData;
        }

    }

    export namespace BlockUtils {

        export namespace FromIndexPosition {

            /**
             * Convert a block position index to a local XYZ coordinate.
             * @param index The block position index.
             * @returns the XYZ coordinates relative to the chunk.
             */
            export function toLocal(index: number): [lx: number, ly: number, lz: number] {
                const y = Math.floor(index / (CHUNK_SIZE * CHUNK_SIZE));
                const z = Math.floor((index % (CHUNK_SIZE * CHUNK_SIZE)) / CHUNK_SIZE);
                const x = index % CHUNK_SIZE;
                return [x, y, z];
            }

            /**
             * Convert a block position index to a global XYZ coordinate.
             * @param index The block position index within the chunk.
             * @param cx Chunk X.
             * @param cy Chunk Y.
             * @param cz Chunk Z.
             * @returns the XYZ coordinates relative to the world.
             */
            export function toGlobal(index: number, cx: number = 0, cy: number = 0, cz: number = 0): [gx: number, gy: number, gz: number] {
                const [lx, ly, lz] = toLocal(index);
                return [
                    (cx * CHUNK_SIZE) + lx,
                    (cy * CHUNK_SIZE) + ly,
                    (cz * CHUNK_SIZE) + lz,
                ]
            }

        }

        export namespace FromLocalPosition {

            /**
             * Convert a local XYZ coordinate to a local block position index.
             * @param lx Local X.
             * @param ly Local Y.
             * @param lz Local Z.
             * @returns the block position index.
             */
            export function toIndex(lx: number, ly: number, lz: number) {
                return ly * CHUNK_SIZE * CHUNK_SIZE + lz * CHUNK_SIZE + lx;
            }

            /**
             * Convert local XYZ coordinates to global XYZ coordinates.
             * @param lx Local X.
             * @param ly Local Y.
             * @param lz Local Z.
             * @param cx Chunk X.
             * @param cy Chunk Y.
             * @param cz Chunk Z.
             * @returns the XYZ coordinates relative to the world.
             */
            export function toGlobal(lx: number, ly: number, lz: number, cx: number = 0, cy: number = 0, cz: number = 0) {
                const index = toIndex(lx, ly, lz);
                return FromIndexPosition.toGlobal(index, cx, cy, cz);
            }

        }

        export namespace FromGlobalPosition {

            /**
             * Converts a global XYZ coordinates to a local block position index.
             * @param gx Global X.
             * @param gy Global Y.
             * @param gz Global Z.
             * @returns the block position index, and the chunk coordinates it is relative to.
             */
            export function toIndex(gx: number, gy: number, gz: number): [index: number, [cx: number, cy: number, cz: number]] {
                const [lx, ly, lz, chunkXYZ] = toLocal(gx, gy, gz);
                return [FromLocalPosition.toIndex(lx, ly, lz), chunkXYZ];
            }

            /**
             * Converts a global XYZ coordinates to local XYZ coordinates.
             * @param gx Global X.
             * @param gy Global Y.
             * @param gz Global Z.
             * @returns the local XYZ coordinates, and the chunk coordinates they are relative to.
             */
            export function toLocal(gx: number, gy: number, gz: number): [
                lx: number, ly: number, lz: number,
                [cx: number, cy: number, cz: number]
            ] {
                const [cx, cy, cz] = [
                    Math.floor(gx / CHUNK_SIZE),
                    Math.floor(gy / CHUNK_SIZE),
                    Math.floor(gz / CHUNK_SIZE),
                ]
                return [
                    ((gx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE,
                    ((gy % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE,
                    ((gz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE,
                    [cx, cy, cz]
                ];
            }

        }

    }

}

try { (window as any).KirkaMap = KirkaMap; } catch {}