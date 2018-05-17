import {
  EventEmitter
} from 'events';
import chokidar from 'chokidar';
import {
  EVENT_TYPE
} from '../constants';


export default class DirWatcher extends EventEmitter {

  watch(path, delay) {
    const watcher = chokidar
      .watch(path, {
        usePolling: true,
        interval: delay
      });

    watcher
      .on("all", () => this.emit(EVENT_TYPE.DIRWATCHER_CHANGED, path));
  }
}