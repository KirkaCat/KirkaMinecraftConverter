

export namespace SchematicData {

    export type NbtEntities = {
        type: 'list',
        value: { type: 'compound', value: NbtEntity[] }
    }

    export type NbtEntity = {
        Data: {
            type: 'compound',
            value: {
                PortalCooldown?: { type: 'int', value: number },
                Rotation?: { type: 'list', value: { type: 'float', value: [ yaw: number, pitch: number ] } },
                Tags?: { type: 'list', value: { type: 'string', value: string[] } },
                Team?: { type: 'string', value: string }
                // Don't care about the others
            }
        },
        Id: { type: 'string', value: string },
        Pos: { type: 'list', value: { type: 'double', value: [ x: number, y: number, z: number ] } }
    }

    export type NbtBlocks = {
        type: 'compound',
        value: {
            Palette: NbtBlockPalette,
            Data: NbtBlockDataBytes,
            // Block Entities - Don't care
        }
    }

    export type NbtBlockPalette = {
        type: 'compound',
        value: Record<string, {
            type: 'int',
            value: number
        }>
    }

    export type NbtBlockDataBytes = {
        type: 'byteArray',
        value: number[]
    }

    export type NbtWidth = {
        type: 'short',
        value: number
    }

    export type NbtLength = {
        type: 'short',
        value: number
    }

    export type NbtHeight = {
        type: 'short',
        value: number
    }

    // TODO: Do something with this later.
    export type NbtDataVersion = {
        type: 'int',
        value: number
    }

}