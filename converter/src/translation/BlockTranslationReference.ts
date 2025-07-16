import { KirkaBlock } from "../Kirka/KirkaBlockReference"
import { MinecraftBlockDefinition } from "../Minecraft/MinecraftBlockDefinition"
import { MinecraftBlock } from "../Minecraft/MinecraftBlockReference"
import { BlockTranslation } from "./BlockTranslation"

const _translations = new Set<BlockTranslation>();
const _referenceMap = new Map<KirkaBlock.Id | MinecraftBlock.Id, BlockTranslation | Set<BlockTranslation>>();

const _BlockTranslationReference: Record<KirkaBlock.Id, {
    primary: BlockTranslation.MinecraftBlockDefinition,
    resolvable?: BlockTranslation.MinecraftBlockDefinition[],
    langTargets?: MinecraftBlock.Id[]
} | null> = {

    0: { primary: { id: 'minecraft:air' } },
    1: {
        primary: {id: 'minecraft:stone'},
        resolvable: [ {id: 'minecraft:stone_slab', type: 'double'} ]
    },
    2: { primary: {id: 'minecraft:smooth_sandstone'} },
    3: {
        primary: {id: 'minecraft:smooth_red_sandstone'},
        resolvable: [ {id: 'minecraft:smooth_red_sandstone_slab', type: 'double'} ]
    },
    4: { primary: {id: 'minecraft:stripped_warped_hyphae'} },
    5: {
        primary: {id: 'minecraft:quartz_block'},
        resolvable: [ {id: 'minecraft:quartz_slab', type: 'double'} ]
    },
    6: {
        primary: {id: 'minecraft:andesite'},
        resolvable: [ {id: 'minecraft:andesite_slab', type: 'double'} ]
    },
    7: { primary: {id: 'minecraft:cyan_terracotta'} },
    8: {
        primary: {id: 'minecraft:stone_bricks'},
        resolvable: [ {id: 'minecraft:stone_brick_slab', type: 'double'} ]
    },
    9: {
        primary: {id: 'minecraft:cut_sandstone'},
        resolvable: [ {id: 'minecraft:cut_sandstone_slab', type: 'double'} ]
    },
    10: { primary: {id: 'minecraft:quartz_bricks'} },
    11: { primary: {id: 'minecraft:stone_slab', type: "bottom"} },
    12: { primary: {id: 'minecraft:stone_slab', type: "top"} },
    13: { primary: {id: 'minecraft:smooth_red_sandstone_slab', type: "bottom"} },
    14: { primary: {id: 'minecraft:smooth_red_sandstone_slab', type: "top"} },
    15: { primary: {id: 'minecraft:quartz_slab', type: "bottom"} },
    16: { primary: {id: 'minecraft:quartz_slab', type: "top"} },

    // -- -- --

    17: { primary: {id: 'minecraft:andesite_slab', type: "bottom"} },
    18: { primary: {id: 'minecraft:andesite_slab', type: "top"} },
    19: { primary: {id: 'minecraft:cut_sandstone_slab', type: "bottom"} },
    20: { primary: {id: 'minecraft:cut_sandstone_slab', type: "top"} },
    21: { primary: {id: 'minecraft:pink_terracotta'} },
    22: {
        primary: {id: 'minecraft:jungle_planks'},
        resolvable: [ {id: 'minecraft:jungle_slab', type: 'double'} ]
    },
    23: {
        primary: {id: 'minecraft:dark_oak_planks'},
        resolvable: [ {id: 'minecraft:dark_oak_slab', type: 'double'} ]
    },
    24: { primary: {id: 'minecraft:chiseled_sandstone'} },
    25: { primary: {id: 'minecraft:jungle_slab', type: "bottom"} },
    26: { primary: {id: 'minecraft:jungle_slab', type: "top"} },
    27: { primary: {id: 'minecraft:glass'} },
    28: { primary: {id: 'minecraft:muddy_mangrove_roots'} },
    29: { primary: {id: 'minecraft:dead_tube_coral_block'} },
    30: { primary: {id: 'minecraft:light_gray_wool'} },
    31: { primary: {id: 'minecraft:tuff'} },
    32: { primary: {id: 'minecraft:red_terracotta'} },

    // -- -- --

    33: { primary: {id: 'minecraft:calcite'} },
    34: {
        primary: {id: 'minecraft:potted_blue_orchid'},
        resolvable: [ { id: 'minecraft:blue_orchid' } ],
        langTargets: [ 'minecraft:blue_orchid' ]
    },
    35: {
        primary: {id: 'minecraft:potted_dead_bush'},
        resolvable: [ { id: 'minecraft:dead_bush' }  ],
        langTargets: [ 'minecraft:dead_bush' ]
    },
    36: { primary: {id: 'minecraft:flower_pot'} },
    37: { primary: {id: 'minecraft:ladder', facing: "south"} },
    38: { primary: {id: 'minecraft:ladder', facing: "north"} },
    39: { primary: {id: 'minecraft:ladder', facing: "west"} },
    40: { primary: {id: 'minecraft:ladder', facing: "east"} },
    41: { primary: {id: 'minecraft:stone_brick_slab', type: "bottom"} },
    42: { primary: {id: 'minecraft:stone_brick_slab', type: "top"} },
    43: { primary: {id: 'minecraft:stripped_jungle_wood'} },
    44: {
        primary: {id: 'minecraft:mossy_stone_bricks'},
        resolvable: [ {id: 'minecraft:mossy_stone_brick_slab', type: 'double'} ]
    },
    45: { primary: {id: 'minecraft:lime_terracotta'} },
    46: { primary: {id: 'minecraft:stripped_spruce_wood'} },
    47: { primary: {id: 'minecraft:jukebox'} },
    48: { primary: {id: 'minecraft:note_block'} },

    // -- -- --

    49: { primary: {id: 'minecraft:spruce_wood'} },
    50: {
        primary: {id: 'minecraft:polished_andesite'},
        resolvable: [ {id: 'minecraft:polished_andesite_slab', type: 'double'} ]
    },
    51: { primary: {id: 'minecraft:bone_block'} },
    52: { primary: {id: 'minecraft:iron_door', half: 'upper', facing: 'south'} },
    53: { primary: {id: 'minecraft:iron_door', half: 'upper', facing: 'north'} },
    54: { primary: {id: 'minecraft:iron_door', half: 'upper', facing: 'west'} },
    55: { primary: {id: 'minecraft:iron_door', half: 'upper', facing: 'east'} },
    56: { primary: {id: 'minecraft:flowering_azalea_leaves'} },
    57: { primary: {id: 'minecraft:furnace'} },
    58: { primary: {id: 'minecraft:quartz_pillar'} },
    59: { primary: {id: 'minecraft:dripstone_block'} },
    60: { primary: {id: 'minecraft:redstone_block'} },
    61: { primary: {id: 'minecraft:iron_door', half: 'lower', facing: 'south'} },
    62: { primary: {id: 'minecraft:iron_door', half: 'lower', facing: 'north'} },
    63: { primary: {id: 'minecraft:iron_door', half: 'lower', facing: 'west'} },
    64: { primary: {id: 'minecraft:iron_door', half: 'lower', facing: 'east'} },

    // -- -- --

    65: { primary: {id: 'minecraft:white_glazed_terracotta'} },
    66: { primary: {id: 'minecraft:orange_glazed_terracotta'} },
    67: { primary: {id: 'minecraft:magenta_glazed_terracotta'} },
    68: { primary: {id: 'minecraft:light_blue_glazed_terracotta'} },
    69: { primary: {id: 'minecraft:yellow_glazed_terracotta'} },
    70: { primary: {id: 'minecraft:lime_glazed_terracotta'} },
    71: { primary: {id: 'minecraft:pink_glazed_terracotta'} },
    72: { primary: {id: 'minecraft:gray_glazed_terracotta'} },
    73: { primary: {id: 'minecraft:light_gray_glazed_terracotta'} },
    74: { primary: {id: 'minecraft:cyan_glazed_terracotta'} },
    75: { primary: {id: 'minecraft:purple_glazed_terracotta'} },
    76: { primary: {id: 'minecraft:blue_glazed_terracotta'} },
    77: { primary: {id: 'minecraft:brown_glazed_terracotta'} },
    78: { primary: {id: 'minecraft:green_glazed_terracotta'} },
    79: { primary: {id: 'minecraft:red_glazed_terracotta'} },
    80: { primary: {id: 'minecraft:black_glazed_terracotta'} },

    // -- -- --

    81: { primary: {id: 'minecraft:emerald_block'} },
    82: { primary: {id: 'minecraft:diamond_block'} },
    83: { primary: {id: 'minecraft:gold_block'} },
    84: { primary: {id: 'minecraft:mangrove_leaves'} },
    85: {
        primary: {id: 'minecraft:potted_crimson_roots'},
        resolvable: [ { id: 'minecraft:crimson_roots' } ],
        langTargets: [ 'minecraft:crimson_roots' ]
    },
    86: {
        primary: { id: 'minecraft:potted_white_tulip' },
        resolvable: [ { id: 'minecraft:white_tulip' }, ],
        langTargets: [ 'minecraft:white_tulip' ]
    },
    87: {
        primary: { id: 'minecraft:potted_allium' },
        resolvable: [ { id: 'minecraft:allium' } ],
        langTargets: [ 'minecraft:allium' ]
    },
    88: {
        primary: { id: 'minecraft:potted_warped_roots' },
        resolvable: [ { id: 'minecraft:warped_roots' } ],
        langTargets: [ 'minecraft:warped_roots' ]
    },
    89: {
        primary: { id: 'minecraft:potted_fern' },
        resolvable: [ { id: 'minecraft:fern' } ],
        langTargets: [ 'minecraft:fern' ]
    },
    90: {
        primary: { id: 'minecraft:vine', east: 'false', north: 'true', south: 'false', west: 'false' },
        resolvable: [ { id: 'minecraft:vine' } ]
    },
    91: { primary: { id: 'minecraft:vine', east: 'false', north: 'false', south: 'true', west: 'false' } },
    92: { primary: { id: 'minecraft:vine', east: 'true', north: 'false', south: 'false', west: 'false' } },
    93: { primary: { id: 'minecraft:vine', east: 'false', north: 'false', south: 'false', west: 'true' } },
    94: { primary: { id: 'minecraft:cyan_carpet' } },
    95: { primary: { id: 'minecraft:green_carpet' } },
    96: { primary: { id: 'minecraft:acacia_trapdoor', facing: 'south', open: 'true' } },

    // -- -- --

    97: { primary: { id: 'minecraft:acacia_trapdoor', facing: 'north', open: 'true' } },
    98: { primary: { id: 'minecraft:acacia_trapdoor', facing: 'west', open: 'true' } },
    99: { primary: { id: 'minecraft:acacia_trapdoor', facing: 'east', open: 'true' } },
    100: {
        primary: { id: 'minecraft:polished_diorite' },
        resolvable: [ { id: 'minecraft:polished_diorite_slab', type: 'double' } ]
    },
    101: { primary: { id: 'minecraft:raw_copper_block' } },
    102: { primary: { id: 'minecraft:infested_mossy_stone_bricks' } },
    103: { primary: { id: 'minecraft:dead_brain_coral_block' } },
    104: {
        primary: { id: 'minecraft:dark_prismarine' },
        resolvable: [ { id: 'minecraft:dark_prismarine_slab', type: 'double' } ]
    },
    105: { primary: { id: 'minecraft:composter'} },
    106: null, // NO BLOCK
    107: { primary: { id: 'minecraft:waxed_oxidized_copper' } },
    108: { primary: { id: 'minecraft:warped_wart_block' } },
    109: { primary: { id: 'minecraft:waxed_copper_block' } },
    110: { primary: { id: 'minecraft:oak_leaves' } },
    111: { primary: { id: 'minecraft:dark_prismarine_slab', type: 'bottom' } },
    112: { primary: { id: 'minecraft:dark_prismarine_slab', type: 'top' } },

    // -- -- --

    113: { primary: { id: 'minecraft:chiseled_stone_bricks' } },
    114: { primary: { id: 'minecraft:prismarine_brick_slab', type: 'bottom' } },
    115: { primary: { id: 'minecraft:prismarine_brick_slab', type: 'top' } },
    116: { primary: { id: 'minecraft:stripped_acacia_wood' } },
    117: { primary: { id: 'minecraft:stripped_oak_wood' } },
    118: { primary: { id: 'minecraft:iron_block' } },
    119: { primary: { id: 'minecraft:mossy_cobblestone' } },
    120: { primary: { id: 'minecraft:dead_horn_coral_block' } },
    121: { primary: { id: 'minecraft:dark_oak_slab', type: 'bottom' } },
    122: { primary: { id: 'minecraft:dark_oak_slab', type: 'top' } },
    123: { primary: { id: 'minecraft:bamboo_slab', type: 'bottom' } },
    124: { primary: { id: 'minecraft:bamboo_slab', type: 'top' } },
    125: { primary: { id: 'minecraft:sponge' } },
    126: { primary: { id: 'minecraft:mossy_stone_brick_slab', type: 'bottom' } },
    127: { primary: { id: 'minecraft:mossy_stone_brick_slab', type: 'top' } },
    128: { primary: { id: 'minecraft:white_wool' } },

    // -- -- --

    129: { primary: { id: 'minecraft:dark_oak_wood' } },
    130: { primary: { id: 'minecraft:oak_wood' } },
    131: { primary: { id: 'minecraft:jungle_wood' } },
    132: { primary: { id: 'minecraft:birch_wood' } },
    133: { primary: { id: 'minecraft:stripped_birch_wood' } },
    134: { primary: { id: 'minecraft:bamboo_block' } },
    135: { primary: { id: 'minecraft:stripped_cherry_wood' } },
    136: { primary: { id: 'minecraft:cherry_log' } },
    137: { primary: { id: 'minecraft:dark_oak_leaves' } },
    138: { primary: { id: 'minecraft:magma_block' } },
    139: { primary: { id: 'minecraft:green_terracotta' } },
    140: { primary: { id: 'minecraft:green_concrete' } },
    141: { primary: { id: 'minecraft:mangrove_wood' } },
    142: { primary: { id: 'minecraft:bamboo_planks' } },
    143: { primary: { id: 'minecraft:netherite_block' } },
    144: { primary: { id: 'minecraft:polished_diorite_slab', type: 'bottom' } },

    // -- -- --

    145: { primary: { id: 'minecraft:polished_diorite_slab', type: 'top' } },
    146: { primary: { id: 'minecraft:barrel' } },
    147: {
        primary: { id: 'minecraft:spruce_planks' },
        resolvable: [ { id: 'minecraft:spruce_slab', type: 'double' } ]
    },
    148: {
        primary: { id: 'minecraft:waxed_oxidized_cut_copper' },
        resolvable: [ { id: 'minecraft:waxed_oxidized_cut_copper_slab', type: 'double' } ]
    },
    149: { primary: { id: 'minecraft:light_blue_wool' } },
    150: { primary: { id: 'minecraft:light_blue_concrete' } },
    151: {
        primary: { id: 'minecraft:warped_planks' },
        resolvable: [ { id: 'minecraft:warped_slab', type: 'double' } ]
    },
    152: {
        primary: { id: 'minecraft:mangrove_planks' },
        resolvable: [ { id: 'minecraft:mangrove_slab', type: 'double' } ]
    },
    153: { primary: { id: 'minecraft:crimson_nylium' } },
    154: {
        primary: { id: 'minecraft:crimson_planks' },
        resolvable: [ { id: 'minecraft:crimson_slab', type: 'double' } ]
    },
    155: { primary: { id: 'minecraft:chiseled_quartz_block' } },
    156: { primary: { id: 'minecraft:dead_bubble_coral_block' } },
    157: { primary: { id: 'minecraft:clay' } },
    158: { primary: { id: 'minecraft:waxed_oxidized_cut_copper_slab', type: 'bottom' } },
    159: { primary: { id: 'minecraft:waxed_oxidized_cut_copper_slab', type: 'top' } },
    160: { primary: { id: 'minecraft:warped_slab', type: 'bottom' } },

    // -- -- --

    161: { primary: { id: 'minecraft:warped_slab', type: 'top' } },
    162: { primary: { id: 'minecraft:mangrove_slab', type: 'bottom' } },
    163: { primary: { id: 'minecraft:mangrove_slab', type: 'top' } },
    164: { primary: { id: 'minecraft:crimson_slab', type: 'bottom' } },
    165: { primary: { id: 'minecraft:crimson_slab', type: 'top' } },
    166: null, // NO BLOCK
    167: { primary: { id: 'minecraft:spruce_slab', type: 'bottom' } },
    168: { primary: { id: 'minecraft:spruce_slab', type: 'top' } },
    169: { primary: { id: 'minecraft:polished_andesite_slab', type: 'bottom' } },
    170: { primary: { id: 'minecraft:polished_andesite_slab', type: 'top' } },
    171: { primary: { id: 'minecraft:cyan_concrete' } },
    172: { primary: { id: 'minecraft:cyan_wool' } },
    173: null, // NO BLOCK
    174: null, // NO BLOCK
    175: null, // NO BLOCK
    176: null, // NO BLOCK

    // -- -- --

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

    // -- -- --

    193: null, // NO BLOCK
    194: null, // NO BLOCK
    195: null, // NO BLOCK
    196: null, // NO BLOCK
    197: null, // NO BLOCK
    198: null, // NO BLOCK
    199: null, // NO BLOCK
    200: { primary: { id: 'minecraft:blue_concrete' } },
    201: { primary: { id: 'minecraft:red_concrete' } },
    202: null, // NO BLOCK
    203: null, // NO BLOCK
    204: null, // NO BLOCK
    205: null, // NO BLOCK
    206: null, // NO BLOCK
    207: null, // NO BLOCK
    208: null, // NO BLOCK

    // -- -- --

    209: null, // NO BLOCK
    210: { primary: { id: 'minecraft:deepslate_lapis_ore' } },
    211: { primary: { id: 'minecraft:deepslate_redstone_ore' } },
    212: { primary: { id: 'minecraft:smooth_quartz_slab', type: 'bottom' } },
    213: { primary: { id: 'minecraft:smooth_quartz_slab', type: 'top' } },
    214: {
        primary: { id: 'minecraft:smooth_quartz' },
        resolvable: [ { id: 'minecraft:smooth_quartz_slab', type: 'double' } ]
    }

}

for (const [strId, translationDefinition] of Object.entries(_BlockTranslationReference)) {
    const kirkaBlockId = Number(strId) as KirkaBlock.Id;
    if (translationDefinition === null) continue;

    // Primary definition
    let { id: primaryId, ...blockStates } = translationDefinition.primary;
    (blockStates as any) = Object.keys(blockStates).length === 0 ? undefined : blockStates;
    const primaryDefinition = new MinecraftBlockDefinition(primaryId, blockStates as BlockTranslation.PropertyStateMap<typeof primaryId>);

    // Resolvable definitions
    const resolvableDefinitions = translationDefinition.resolvable?.map(resolvable => {
        let { id: resolvableId, ...resolvableBlockStates } = resolvable;
        (resolvableBlockStates as any) = Object.keys(resolvableBlockStates).length === 0 ? undefined : resolvableBlockStates;
        return new MinecraftBlockDefinition(resolvableId, resolvableBlockStates as BlockTranslation.PropertyStateMap<typeof resolvableId>);
    });

    const translation = new BlockTranslation(
        kirkaBlockId,
        primaryDefinition,
        resolvableDefinitions,
        translationDefinition.langTargets
    )
    _translations.add(translation);
    _referenceMap.set(kirkaBlockId, translation);

    // Get or create a new translation set, mapping it to the reference map using the primary definition's minecraft block ID
    const primaryTranslationSet = (_referenceMap.get(primaryId) as Set<BlockTranslation>) ?? new Set<BlockTranslation>();
    primaryTranslationSet.add(translation);
    _referenceMap.set(primaryId, primaryTranslationSet);

    // For each resolvable definition, get or create a new translation set, mapping it to the reference map using the resolvaable definition's minecraft block ID
    if (resolvableDefinitions) {
        for (const definition of resolvableDefinitions) {
            const resolvableTranslationSet = (_referenceMap.get(definition.id) as Set<BlockTranslation>) ?? new Set<BlockTranslation>();
            resolvableTranslationSet.add(translation);
            _referenceMap.set(definition.id, resolvableTranslationSet);
        }
    }

}

export namespace BlockTranslationReference {

    export const translations = [..._translations.values()];

    export function get<T extends KirkaBlock.Id | MinecraftBlock.Id>(id: T): (T extends KirkaBlock.Id ? BlockTranslation : Set<BlockTranslation>) | undefined {
        return _referenceMap.get(id) as any;
    }

}