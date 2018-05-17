import fs from 'fs';
import { promisify } from 'util';


const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);

export default class Importer {

    async readDir(path) {
        return readDir(path);
    }

    async import (path) {
        return readFile(path);
    }

    importSync (path) {
        return fs.readFileSync(path);
    }

}