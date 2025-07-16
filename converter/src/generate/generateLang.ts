
import fs from 'node:fs';
import { BlockTranslationReference } from '../translation/BlockTranslationReference';
import { KirkaBlock } from '../Kirka/KirkaBlockReference';
import { MinecraftBlock } from '../Minecraft/MinecraftBlockReference';

const DATA_LANG_DIR = `../minecraft data/lang`;
const PACK_LANG_DIR = `../resources/minecraft/resource pack/pack/assets/minecraft/lang`
const LANG_BLOCK_PREFIX = 'block.minecraft.';
const formatLangPrefix = (ids: string) => `§8[§fK§7irka ${ids}§8]§b `;

export default (function() {

    const translations = [...BlockTranslationReference.translations].sort((a, b) => a.kirka - b.kirka);

    // Get all Kirka block IDs that correspond to each Minecraft block ID
    const sameLangTargetMap = new Map<MinecraftBlock.Id, KirkaBlock.Id[]>();
    for (const translation of translations) {
        for (const langTarget of translation.minecraftLangTargets) {
            const map = sameLangTargetMap.get(langTarget) ?? (sameLangTargetMap.set(langTarget, []).get(langTarget) as KirkaBlock.Id[]);
            map.push(translation.kirka);
        }
    }

    // Group all IDs relevant to each Minecraft block ID and form the lang prefix
    const translationPrefixMap = new Map<string, string>();
    for (const [minecraftId, kirkaIds] of sameLangTargetMap.entries()) {

        // Group sequential IDs to form a cleaner prefix like `10-14 & 38-40`
        const idGroups: number[][] = [];
        let index = 0;
        while (index < kirkaIds.length) {
            const newGroup = [];

            let lastValue;
            do {
                lastValue = kirkaIds[index];
                newGroup.push(lastValue);
            } while ((kirkaIds[++index] - lastValue) === 1);

            idGroups.push(newGroup);
        }

        // Create a prefix using the ID groups
        const prefix =  formatLangPrefix(idGroups.map(idGroup => {
            if (idGroup.length === 1) return idGroup[0];
            return `${Math.min.apply(Math, idGroup)}-${Math.max.apply(Math, idGroup)}`;
        }).join(' & '));

        const langBlockName = minecraftId.replace('minecraft:', '');
        translationPrefixMap.set(langBlockName, prefix);

    }

    translationPrefixMap.forEach((prefix, id) => console.log(`${prefix}${id}`)); // Debug

    // Extract localized block names from data files and build a new language file, prefixed with Kirka IDs
    const langFileNames = fs.readdirSync(DATA_LANG_DIR);
    for (const fileName of langFileNames) {

        try {
            const data = fs.readFileSync(`${DATA_LANG_DIR}/${fileName}`, 'utf8');

            const lang = JSON.parse(data);
            const newLang: Record<string, string> = {};
            translationPrefixMap.forEach((prefix, id) => {
                const localizedBlockName = lang[`${LANG_BLOCK_PREFIX}${id}`];
                newLang[`${LANG_BLOCK_PREFIX}${id}`] = `${prefix}${localizedBlockName}`;
            })

            if (!fs.existsSync(PACK_LANG_DIR)) fs.mkdirSync(PACK_LANG_DIR);
            fs.writeFileSync(`${PACK_LANG_DIR}/${fileName}`, JSON.stringify(newLang, undefined, 2));

        } catch (err) {
            console.error(err); // TODO: Maybe better error handling, I'm too lazy rn.
        }

    }

})();