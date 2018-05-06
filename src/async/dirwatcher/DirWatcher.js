import fs from 'fs';

import { EVENT_TYPE } from '../constants';


export default class DirWatcher {
  constructor(eventEmitter) {
    this.eventEmitter = eventEmitter;
  }

    watch(path, delay = 0) {
        fs.watch(path, (eventType, fileName) => {
          setTimeout(() => {
            this.eventEmitter.emit(EVENT_TYPE.DIRWATCHER_CHANGED, fileName);
          }, delay);
        });
      }
}