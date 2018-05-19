import fs from 'fs';
import { promisify } from 'util';


const readFile = promisify(fs.readFile);

export default class Importer {

    async import (path) {
        return readFile(path);
    }

    importSync (path) {
        return fs.readFileSync(path);
    }

}
