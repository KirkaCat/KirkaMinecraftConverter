console.clear();

// Chunk block indexes start from the bottom and fill upwards.
// This reverses the row index, making 0>15, 1>14, 2>13... etc.
function getRalativeChunkRowIndex(rowIndex: number) {
    if (rowIndex < 0 || rowIndex > 15) throw new Error(`Chunk row index must be >0 & <16; actual: ${rowIndex}`);
    return 15 - rowIndex;
}

class BlockFill {
    constructor(
        public readonly index: number,
        public readonly blockId?: number
    ) {
        this.index = index;
        this.blockId = blockId;
    }
    public toJSON() { return [ this.index, this.blockId, 1 ] }
}

class Chunk {
    private _blocks = new Map<number, BlockFill>();
    constructor(
        public readonly x: number,
        public readonly y: number,
    ) {
        this.x =  x;
        this.y = y;
    }
    public setBlock(columnIndex: number, rowIndex: number, blockId?: number) {
        const topBottomRowIndex = getRalativeChunkRowIndex(rowIndex);
        const index = (topBottomRowIndex * 256) + columnIndex;
        this._blocks.set(index, new BlockFill(index, blockId));
    }
    public get pos() { return `${this.x},${this.y},0` }
    public get blocks() { return [...this._blocks.values()] }
}

const confirmedBlockIds = new Set<number>();
const confirmedBlockIdRanges = [
    [0, 105],
    [107, 165],
    [167, 172],
    [200, 201],
    [210, 211],
]
for (const range of confirmedBlockIdRanges) {
    const start = range[0];
    const end = range[1];
    for (let i = start; i <= end; i++ ) confirmedBlockIds.add(i);
}


const MAX_ID = 250;
const CONFIRMED_ONLY = true;
const BLOCKS_PER_ROW = 16;
const BLOCK_SPACING = 1;

type CompactBlockIdTable = (number | undefined)[][];
type BlockIdTable = ((number | undefined)[] | undefined)[];

// Populate rows with block IDs.
const compactBlockIdTable: CompactBlockIdTable = [];
for (let blockIdIndex = 0; blockIdIndex < MAX_ID; blockIdIndex++) {
    const rowIndex = Math.floor(blockIdIndex / BLOCKS_PER_ROW);
    const blockId = blockIdIndex+1;

    const row = compactBlockIdTable[rowIndex] ?? (compactBlockIdTable[rowIndex] = []);
    row.push(blockId);
}

// Insert column/row spacing.
let blockIdTable: BlockIdTable = [];
for (let rowIndex = 0; rowIndex < compactBlockIdTable.length; rowIndex++) {
    const blockIds = compactBlockIdTable[rowIndex];
    let newRow = [];
    for (const blockId of blockIds) {
        newRow.push(blockId);
        for (let i = 0; i < BLOCK_SPACING; i++) newRow.push(undefined);
    }

    // Trim trailing spacers
    newRow.reverse();
    while(newRow.length > 0 && newRow[0] === undefined) newRow = newRow.slice(1);

    blockIdTable.push(newRow.reverse());
    for (let i = 0; i < BLOCK_SPACING; i++) blockIdTable.push(undefined);
}

const reportTable: Record<number | string, any>[] = [];

type ChunksX = Map<number, Chunk>; // The chunk(s) mapped to their X axis.
type ChunksY = Map<number, ChunksX>; // The chunk group(s) mapped to their Y axis.
const yChunks: ChunksY = new Map();

for (let globalRowIndex = 0; globalRowIndex < blockIdTable.length; globalRowIndex++) {
    const y = -Math.floor(globalRowIndex / 16);
    const chunkRowIndex = globalRowIndex % 16;
    const xChunks = yChunks.get(y) ?? yChunks.set(y, new Map()).get(y) as ChunksX;

    const reportTableColumnValues: (number | string)[] = [];

    const rowBlockData = blockIdTable[globalRowIndex];
    if (rowBlockData === undefined) continue;
    for (let globalColumnIndex = 0; globalColumnIndex < rowBlockData.length; globalColumnIndex++) {
        const blockId = rowBlockData[globalColumnIndex];

        if (blockId !== undefined) {
            reportTableColumnValues.push(confirmedBlockIds.has(blockId) ? blockId : "-");
            if (CONFIRMED_ONLY && !confirmedBlockIds.has(blockId)) continue;

            const x = Math.floor(globalColumnIndex / 16);
            const chunkColumnIndex = globalColumnIndex % 16;
            const chunk = xChunks.get(x) ?? xChunks.set(x, new Chunk(x, y)).get(x) as Chunk;

            chunk.setBlock(chunkColumnIndex, chunkRowIndex, blockId);
        }

    }

    const reportTableRowData: Record<number | string, any> = {};
    reportTableColumnValues.forEach((v, i) => reportTableRowData[i] = v);
    reportTable.push(reportTableRowData);

}

let deDupedChunks = new Set<Chunk>();
yChunks.forEach(chunks => {
    chunks.forEach(chunk => deDupedChunks.add(chunk) );
})

const sortedChunks = [...deDupedChunks.values()].sort((a,b) => b.y - a.y).sort((a,b) => a.x - b.x);
const data: Record<string, any> = {};
for (const chunk of sortedChunks) data[chunk.pos] = chunk.blocks;

const mapCode = {
  "mapName___DATA": "Blocks Preview",
  "spawnPlaces___DATA": {"firstTeam___DATA": [], "secondTeam___DATA": []},
  "chunks___DATA": data,
}

console.log(JSON.stringify(mapCode));
console.table(reportTable);