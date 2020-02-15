import {TaskStore} from './index';
import {SearchStore} from './index';

class RootStore {
    constructor(initState) {
        if (initState == null) initState = {};
        this.taskStore = new TaskStore(this, initState.taskStore);
        this.searchStore = new SearchStore(this);

    }

    serialize = () => ({
        taskStore: this.taskStore.serialize(),
    });
}

export {RootStore};
