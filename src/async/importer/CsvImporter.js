import parse from 'csv-parse'
import parseCsvSync from 'csv-parse/lib/sync';
import { promisify } from 'util';

import Importer from './Importer'

const parseCsv = promisify(parse);


export default class CsvImporter extends Importer {
    constructor() {
        super();
    }

    async import (path) {
        const data = await super.import(path);
        return parseCsv(data); 
    }

    importSync (path) {
        const data = super.importSync(path);
        return parseCsvSync(data);
    }

}