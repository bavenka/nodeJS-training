import {
  name
} from '../src/config';
import {
  EVENT_TYPE
} from '../async/constants';

import {
  User,
  Product
} from '../src/models';

import DirWatcher from '../async/dirwatcher/DirWatcher';
import CsvImporter from '../async/importer/CsvImporter';

console.log(name);
new User();
new Product();

const DATA_PATH = path.resolve(__dirname, 'data');

const dirWatcher = new DirWatcher();
const importer = new CsvImporter();

dirWatcher
  .watch(DATA_PATH, 1000);

dirWatcher
  .on(EVENT_TYPE.DIRWATCHER_CHANGED, async (path) => {
    const data = await importer.import(path);
    console.log(data);
  });
