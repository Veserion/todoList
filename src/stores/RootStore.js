import {TaskStore} from './index';

class RootStore {
    constructor(initState) {
        // if (initState == null) initState = {};

        // this.taskStore = new TaskStore(this, initState.taskStore);
        this.taskStore = new TaskStore(this);
    }

    // serialize = () => ({
        // taskStore: this.taskStore.serialize(),
    // });
}

export {RootStore};