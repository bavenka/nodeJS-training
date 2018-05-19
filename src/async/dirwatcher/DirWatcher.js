import {
  EventEmitter
} from 'events';
import chokidar from 'chokidar';
import {
  EVENT_TYPE
} from '../constants';


export default class DirWatcher extends EventEmitter {

  watch(dir, delay) {
    const watcher = chokidar
      .watch(dir, {
        usePolling: true,
        interval: delay
      });

    watcher
      .on('add', path => this.emit(EVENT_TYPE.DIRWATCHER_CHANGED, path))
  }
}
