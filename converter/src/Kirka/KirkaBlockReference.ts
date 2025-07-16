
export type KirkaBlockReference = {
    [K in KirkaBlock.Id]: null |typeof KirkaBlockReference[K] extends null ? null : KirkaBlock<K>;
}

export const KirkaBlockReference: Record<number, KirkaBlock | null> = {
    0: {
        id: 0,
        uiCatagory: KirkaBlock.EUICatagory.AIR,
        isTransparrent: true,
        description: "Air"
    },
    1: {
        id: 1,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 11, top: 12 }
    },
    2: {
        id: 2,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        description: "Sand"
    },
    3: {
        id: 3,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 13, top: 14 }
    },
    4: {
        id: 4,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    5: {
        id: 5,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 15, top: 16 }
    },
    6: {
        id: 6,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 17, top: 18 }
    },
    7: {
        id: 7,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    8: {
        id: 8,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 41, top: 42 }
    },
    9: {
        id: 9,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 19, top: 20 }
    },
    10: {
        id: 10,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    11: {
        id: 11,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 11,
        derivedFrom: 1,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    12: {
        id: 12,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 11,
        derivedFrom: 1,
        slabType: KirkaBlock.ESlabType.TOP
    },
    13: {
        id: 13,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 13,
        derivedFrom: 3,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    14: {
        id: 14,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 13,
        derivedFrom: 3,
        slabType: KirkaBlock.ESlabType.TOP
    },
    15: {
        id: 15,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 15,
        derivedFrom: 5,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    16: {
        id: 16,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 15,
        derivedFrom: 5,
        slabType: KirkaBlock.ESlabType.TOP
    },
    17: {
        id: 17,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 17,
        derivedFrom: 6,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    18: {
        id: 18,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 17,
        derivedFrom: 6,
        slabType: KirkaBlock.ESlabType.TOP
    },
    19: {
        id: 19,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 19,
        derivedFrom: 9,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    20: {
        id: 20,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 19,
        derivedFrom: 9,
        slabType: KirkaBlock.ESlabType.TOP
    },
    21: {
        id: 21,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    22: {
        id: 22,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 25, top: 26 }
    },
    23: {
        id: 23,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 121, top: 122 }
    },
    24: {
        id: 24,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    25: {
        id: 25,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 25,
        derivedFrom: 22,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    26: {
        id: 26,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 25,
        derivedFrom: 22,
        slabType: KirkaBlock.ESlabType.TOP
    },
    27: {
        id: 27,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        isTransparrent: true,
        description: "Glass/Window"
    },
    28: {
        id: 28,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    29: {
        id: 29,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    30: {
        id: 30,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    31: {
        id: 31,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    32: {
        id: 32,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    33: {
        id: 33,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    34: {
        id: 34,
        uiCatagory: 'plants',
        isTransparrent: true
    },
    35: {
        id: 35,
        uiCatagory: 'plants',
        isTransparrent: true
    },
    36: {
        id: 36,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Weird small cube thing"
    },
    37: {
        id: 37,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Ladder (primary) - South",
        parent: 37,
        facing: KirkaBlock.EFacingDirection.SOUTH
    },
    38: {
        id: 38,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Ladder - North",
        parent: 37,
        facing: KirkaBlock.EFacingDirection.NORTH
    },
    39: {
        id: 39,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Ladder - West",
        parent: 37,
        facing: KirkaBlock.EFacingDirection.WEST
    },
    40: {
        id: 40,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Ladder - East",
        parent: 37,
        facing: KirkaBlock.EFacingDirection.EAST
    },
    41: {
        id: 41,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 41,
        derivedFrom: 8,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    42: {
        id: 42,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 41,
        derivedFrom: 8,
        slabType: KirkaBlock.ESlabType.TOP
    },
    43: {
        id: 43,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    44: {
        id: 44,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 126, top: 127 }
    },
    45: {
        id: 45,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    46: {
        id: 46,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    47: {
        id: 47,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    48: {
        id: 48,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    49: {
        id: 49,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    50: {
        id: 50,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 169, top: 170 }
    },
    51: {
        id: 51,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    52: {
        id: 52,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Upper iron door (primary) - South",
        parent: 52,
        facing: KirkaBlock.EFacingDirection.SOUTH
    },
    53: {
        id: 53,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Upper iron door - North",
        parent: 52,
        facing: KirkaBlock.EFacingDirection.NORTH
    },
    54: {
        id: 54,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Upper iron door - West",
        parent: 52,
        facing: KirkaBlock.EFacingDirection.WEST
    },
    55: {
        id: 55,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Upper iron door - East",
        parent: 52,
        facing: KirkaBlock.EFacingDirection.EAST
    },
    56: {
        id: 56,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        isTransparrent: true,
        description: "Leaves"
    },
    57: {
        id: 57,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    58: {
        id: 58,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    59: {
        id: 59,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    60: {
        id: 60,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    61: {
        id: 61,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Lower iron door (primary) - South",
        parent: 61,
        facing: KirkaBlock.EFacingDirection.SOUTH
    },
    62: {
        id: 62,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Lower iron door - North",
        parent: 61,
        facing: KirkaBlock.EFacingDirection.NORTH
    },
    63: {
        id: 63,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Lower iron door - West",
        parent: 61,
        facing: KirkaBlock.EFacingDirection.WEST
    },
    64: {
        id: 64,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Lower iron door - East",
        parent: 61,
        facing: KirkaBlock.EFacingDirection.EAST
    },
    65: {
        id: 65,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 1: Summer sky/winter sky"
    },
    66: {
        id: 66,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 2: Black cat"
    },
    67: {
        id: 67,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 3: Donkey Kong"
    },
    68: {
        id: 68,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 4 (1/4): Desert temple/sniper"
    },
    69: {
        id: 69,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 4 (2/4): Desert temple/sniper"
    },
    70: {
        id: 70,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 4 (3/4): Desert temple/sniper"
    },
    71: {
        id: 71,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 4 (4/4): Desert temple/sniper"
    },
    72: {
        id: 72,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 5 (1/4): Creeper desert/bookshelves"
    },
    73: {
        id: 73,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 5 (2/4): Creeper desert/bookshelves"
    },
    74: {
        id: 74,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 5 (3/4): Creeper desert/bookshelves"
    },
    75: {
        id: 75,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 5 (4/4): Creeper desert/bookshelves"
    },
    76: {
        id: 76,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 6: Tabbycat/bunny"
    },
    77: {
        id: 77,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 7 (1/2): Top - Creeper/cactus"
    },
    78: {
        id: 78,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 7 (2/2): Bottom - Creeper/cactus"
    },
    79: {
        id: 79,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 8 (1/2): Top - Enderman/skyscraper"
    },
    80: {
        id: 80,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 8 (2/2): Bottom - Enderman/skyscraper"
    },
    81: {
        id: 81,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 9: Clock"
    },
    82: {
        id: 82,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 10 (1/2): Left -Bunny heads"
    },
    83: {
        id: 83,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Painting 10 (2/2): Right - Bunny heads"
    },
    84: {
        id: 84,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        isTransparrent: true,
        description: "Leaves"
    },
    85: {
        id: 85,
        uiCatagory: 'plants',
        isTransparrent: true
    },
    86: {
        id: 86,
        uiCatagory: 'plants',
        isTransparrent: true
    },
    87: {
        id: 87,
        uiCatagory: 'plants',
        isTransparrent: true
    },
    88: {
        id: 88,
        uiCatagory: 'plants',
        isTransparrent: true
    },
    89: {
        id: 89,
        uiCatagory: 'plants',
        isTransparrent: true
    },
    90: {
        id: 90,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Vines/Moss (primary) - South",
        parent: 90,
        facing: KirkaBlock.EFacingDirection.SOUTH
    },
    91: {
        id: 91,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Vines/Moss - North",
        parent: 90,
        facing: KirkaBlock.EFacingDirection.NORTH
    },
    92: {
        id: 92,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Vines/Moss - West",
        parent: 90,
        facing: KirkaBlock.EFacingDirection.WEST
    },
    93: {
        id: 93,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Vines/Moss - East",
        parent: 90,
        facing: KirkaBlock.EFacingDirection.EAST
    },
    94: {
        id: 94,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Carpet 1"
    },
    95: {
        id: 95,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        description: "Carpet 2"
    },
    96: {
        id: 96,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Iron bars (primary) - South",
        parent: 96,
        facing: KirkaBlock.EFacingDirection.SOUTH
    },
    97: {
        id: 97,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Iron bars - North",
        parent: 96,
        facing: KirkaBlock.EFacingDirection.NORTH
    },
    98: {
        id: 98,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Iron bars - West",
        parent: 96,
        facing: KirkaBlock.EFacingDirection.WEST
    },
    99: {
        id: 99,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        isTransparrent: true,
        description: "Iron bars - East",
        parent: 96,
        facing: KirkaBlock.EFacingDirection.EAST
    },
    100: {
        id: 100,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 144, top: 145 }
    },
    101: {
        id: 101,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    102: {
        id: 102,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    103: {
        id: 103,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    104: {
        id: 104,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 111, top: 112 }
    },
    105: {
        id: 105,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    106: null, // NO BLOCK
    107: {
        id: 107,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    108: {
        id: 108,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    109: {
        id: 109,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    110: {
        id: 110,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        isTransparrent: true,
        description: "Leaves"
    },
    111: {
        id: 111,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 111,
        derivedFrom: 104,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    112: {
        id: 112,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 111,
        derivedFrom: 104,
        slabType: KirkaBlock.ESlabType.TOP
    },
    113: {
        id: 113,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    114: {
        id: 114,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 114,
        derivedFrom: null,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    115: {
        id: 115,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 114,
        derivedFrom: null,
        slabType: KirkaBlock.ESlabType.TOP
    },
    116: {
        id: 116,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    117: {
        id: 117,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    118: {
        id: 118,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    119: {
        id: 119,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    120: {
        id: 120,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    121: {
        id: 121,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 121,
        derivedFrom: 23,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    122: {
        id: 122,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 121,
        derivedFrom: 23,
        slabType: KirkaBlock.ESlabType.TOP
    },
    123: {
        id: 123,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 123,
        derivedFrom: 142,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    124: {
        id: 124,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 123,
        derivedFrom: 142,
        slabType: KirkaBlock.ESlabType.TOP
    },
    125: {
        id: 125,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    126: {
        id: 126,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 126,
        derivedFrom: 44,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    127: {
        id: 127,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 126,
        derivedFrom: 44,
        slabType: KirkaBlock.ESlabType.TOP
    },
    128: {
        id: 128,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    129: {
        id: 129,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    130: {
        id: 130,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        description: "Incorrect texture on bottom face."
    },
    131: {
        id: 131,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    132: {
        id: 132,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    133: {
        id: 133,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    134: {
        id: 134,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    135: {
        id: 135,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    136: {
        id: 136,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    137: {
        id: 137,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        isTransparrent: true,
        description: "Leaves"
    },
    138: {
        id: 138,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        isDeathPlane: true,
        description: "Lava/Magma - Kills the player when stepped on"
    },
    139: {
        id: 139,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    140: {
        id: 140,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    141: {
        id: 141,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    142: {
        id: 142,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 123, top: 124 }
    },
    143: {
        id: 143,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    144: {
        id: 144,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 144,
        derivedFrom: 100,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    145: {
        id: 145,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 144,
        derivedFrom: 100,
        slabType: KirkaBlock.ESlabType.TOP
    },
    146: {
        id: 146,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        description: "Incorrect texture on bottom face."
    },
    147: {
        id: 147,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 167, top: 168 }
    },
    148: {
        id: 148,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 158, top: 159 }
    },
    149: {
        id: 149,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    150: {
        id: 150,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    151: {
        id: 151,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 160, top: 161 }
    },
    152: {
        id: 152,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 162, top: 163 }
    },
    153: {
        id: 153,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    154: {
        id: 154,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        slabs: { bottom: 164, top: 165 }
    },
    155: {
        id: 155,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    156: {
        id: 156,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    157: {
        id: 157,
        uiCatagory: KirkaBlock.EUICatagory.CUBE
    },
    158: {
        id: 158,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 158,
        derivedFrom: 148,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    159: {
        id: 159,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 158,
        derivedFrom: 148,
        slabType: KirkaBlock.ESlabType.TOP
    },
    160: {
        id: 160,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 160,
        derivedFrom: 151,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    161: {
        id: 161,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 160,
        derivedFrom: 151,
        slabType: KirkaBlock.ESlabType.TOP
    },
    162: {
        id: 162,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 162,
        derivedFrom: 152,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    163: {
        id: 163,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 162,
        derivedFrom: 152,
        slabType: KirkaBlock.ESlabType.TOP
    },
    164: {
        id: 164,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 164,
        derivedFrom: 154,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    165: {
        id: 165,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 164,
        derivedFrom: 154,
        slabType: KirkaBlock.ESlabType.TOP
    },
    166: null, // NO BLOCK
    167: {
        id: 167,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 167,
        derivedFrom: 147,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    168: {
        id: 168,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 167,
        derivedFrom: 147,
        slabType: KirkaBlock.ESlabType.TOP
    },
    169: {
        id: 169,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 169,
        derivedFrom: 50,
        slabType: KirkaBlock.ESlabType.BOTTOM
    },
    170: {
        id: 170,
        uiCatagory: KirkaBlock.EUICatagory.HALF_BLOCK,
        parent: 169,
        derivedFrom: 50,
        slabType: KirkaBlock.ESlabType.TOP
    },
    171: {
        id: 171,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT
    },
    172: {
        id: 172,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT
    },
    173: null, // NO BLOCK
    174: null, // NO BLOCK
    175: null, // NO BLOCK
    176: null, // NO BLOCK
    177: null, // NO BLOCK
    178: null, // NO BLOCK
    179: null, // NO BLOCK
    180: null, // NO BLOCK
    181: null, // NO BLOCK
    182: null, // NO BLOCK
    183: null, // NO BLOCK
    184: null, // NO BLOCK
    185: null, // NO BLOCK
    186: null, // NO BLOCK
    187: null, // NO BLOCK
    188: null, // NO BLOCK
    189: null, // NO BLOCK
    190: null, // NO BLOCK
    191: null, // NO BLOCK
    192: null, // NO BLOCK
    193: null, // NO BLOCK
    194: null, // NO BLOCK
    195: null, // NO BLOCK
    196: null, // NO BLOCK
    197: null, // NO BLOCK
    198: null, // NO BLOCK
    199: null, // NO BLOCK
    200: {
        id: 200,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        description: "Blue block"
    },
    201: {
        id: 201,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        description: "Red block"
    },
    202: null, // NO BLOCK
    203: null, // NO BLOCK
    204: null, // NO BLOCK
    205: null, // NO BLOCK
    206: null, // NO BLOCK
    207: null, // NO BLOCK
    208: null, // NO BLOCK
    209: null, // NO BLOCK
    210: {
        id: 210,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        description: "Blue gem"
    },
    211: {
        id: 211,
        uiCatagory: KirkaBlock.EUICatagory.CUBE,
        description: "Red gem"
    },
    212: {
        id: 212,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        parent: 212,
        derivedFrom: 214,
        slabType: KirkaBlock.ESlabType.BOTTOM,
        description: "Light half-block (bottom)"
    },
    213: {
        id: 213,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        parent: 212,
        derivedFrom: 214,
        slabType: KirkaBlock.ESlabType.TOP,
        description: "Light half-block (top)"
    },
    214: {
        id: 214,
        uiCatagory: KirkaBlock.EUICatagory.DIFFERENT,
        slabs: { bottom: 212, top: 213 },
        description: "Light block"
    },
} as const;


export namespace KirkaBlock {
    
    export type Id = keyof typeof KirkaBlockReference;

    // -- -- --

    export interface ITransparrent<T extends boolean = any> {
        /**
         * Whether or not this block is transparrent, meaning the texture can be seen through.
         */
        isTransparrent: T;
    }

    export interface IDeathPlane<T extends boolean = any> {
        /**
         * Whether or not this block is a death plane, killing players when they step on it.
         */
        isDeathPlane: T;
    }
    
    /**
     * A block type where one single block is used to place many.  
     * E.g. Ladders, slabs etc...
     */
    export interface IDynamic {
        /**
         * The ID of the block that is held and used to place this block; or the same ID if the current block is the primary block.
         */
        parent: Id;
    }

    export interface IDoubleSlab {
        slabs: Record<SlabType, Id>;
    }

    export interface ISlab {
        /**
         * The ID of the block that this slab is derived from (a double slab/full block).  
         * Some slab blocks like `114` & `115` are not a derivative of any block and have their own unique texture; flagged as `null`.
         */
        derivedFrom?: Id | null;
        /**
         * Which half of the slab this block represents (bottom/top).
         */
        slabType: SlabType;
    }

    export interface IDirectional<T extends FacingDirection = any> {
        /**
         * The facing direction of this block.  
         * If you are facing north and looking at the front of a ladder, that ladder's facing direction is south.
         */
        facing: T;
    }

    // -- -- --

    export enum EUICatagory {
        AIR = 'air',
        CUBE = 'cube',
        HALF_BLOCK = 'HB',
        PLANTS = 'plants',
        DIFFERENT = 'different'
    }
    export type UICatagory = 'air' | 'cube' | 'HB' | 'plants' | 'different';

    export enum ESlabType {
        BOTTOM = 'bottom',
        TOP = 'top'
    }
    export type SlabType = 'bottom' | 'top';

    export enum EFacingDirection {
        NORTH = 'north',
        EAST = 'east',
        SOUTH = 'south',
        WEST = 'west'
    }
    export type FacingDirection = 'north' | 'east' | 'south' | 'west';

}

export type KirkaBlock<T extends KirkaBlock.Id = number> = Partial<KirkaBlock.ITransparrent> &
    Partial<KirkaBlock.IDeathPlane> &
    Partial<KirkaBlock.IDynamic> &
    Partial<KirkaBlock.IDoubleSlab> &
    Partial<KirkaBlock.ISlab> &
    Partial<KirkaBlock.IDirectional> &
{

    /**
     * The numerical block ID within Kirka.
     */
    id: T;

    /**
     * The catagory in which this block appears in via the block selection menu.
     */
    uiCatagory: KirkaBlock.UICatagory;

    description?: string;

}