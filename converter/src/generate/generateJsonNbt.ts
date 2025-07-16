

import fs from 'node:fs';
import nbt from '../lib/nbt';
import pako from '../lib/pako';

const NBT_DATA_PATH = `../minecraft data/nbt`;
const OUTPUT_PATH = `./src/Minecraft/json-nbt`;

export default (function() {

    const dataFileNames = fs.readdirSync(NBT_DATA_PATH);

    for (const fileName of dataFileNames) {
        const dataName = fileName.replace(/^(.+)\.[^\.]+/, (_, name) => { // Remove extension
            return (name as string).replaceAll(/(^|\-)(\w)/g, (_,__,char) => char.toUpperCase()) // Convert to PascalCase
        });

        const fileData = fs.readFileSync(`${NBT_DATA_PATH}/${fileName}`);
        const nbtData = nbt.parseUncompressed(pako.ungzip(fileData) as Uint8Array<ArrayBuffer>) as any;

        const jsonNbtData = JSON.stringify(nbtData, undefined, 4);
        const fileContent = `const ${dataName} = ${jsonNbtData}\n\nexport default ${dataName};`;

        if (!fs.existsSync(OUTPUT_PATH)) fs.mkdirSync(OUTPUT_PATH);
        fs.writeFileSync(`${OUTPUT_PATH}/${dataName}.ts`, fileContent);
        console.log(`${dataName}.ts`);
    }

})();