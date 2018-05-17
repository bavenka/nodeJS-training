import path from 'path';
import parse from 'csv-parse'
import parseCsvSync from 'csv-parse/lib/sync';
import {
    promisify
} from 'util';

import Importer from './Importer'

const parseCsv = promisify(parse);


export default class CsvImporter extends Importer {

    async readDir(dirPath) {
        const files = await super.readDir(dirPath);
        const csvFiles = await files.filter(file => path.extname(file) === '.csv');
        return csvFiles.reduce(async(prevValue, value) => {
            console.log(value);
            prevValue.push(await this.import(dirPath + '/' + value));
            return prevValue;
        }, []);
    }
    
    async import (path) {
        const data = await super.import(path);
        return parseCsv(data);
    }

    importSync(path) {
        const data = super.importSync(path);
        return parseCsvSync(data);
    }

}