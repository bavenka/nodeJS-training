import path from 'path';
import { EventEmitter } from 'events';

import { name } from './config';

import { EVENT_TYPE} from './src/async/constants';

import { User, Product } from './src/models';

import DirWatcher from './src/async/dirwatcher/DirWatcher';
import CsvImporter from './src/async/importer/CsvImporter';

console.log(name);
new User();
new Product();

const DATA_PATH = path.resolve(__dirname, 'data');

const eventEmitter = new EventEmitter();

const dirWatcher = new DirWatcher(eventEmitter);
dirWatcher.watch(DATA_PATH, 5000);

const importer = new CsvImporter();

eventEmitter.on(EVENT_TYPE.DIRWATCHER_CHANGED, async (path) => {
    const data = await importer.import(`${DATA_PATH}/${path}`);
    console.log(data);
});

eventEmitter.on(EVENT_TYPE.DIRWATCHER_CHANGED, (path) => {
    const data = importer.importSync(`${DATA_PATH}/${path}`);
    console.log(data);
});