import {SubStore} from "./SubStore";
import {observable, action, decorate} from "mobx";


export class TaskStore extends SubStore {
    todoData = [];

    addItem = label =>
        this.todoData.push({
            label,
            important: false,
            done: false
        });

    deleteItem = i => {
        this.todoData.splice(i, 1);
        console.log(this.todoData)
    }
    onToggleImportant = (i) =>
        this.todoData[i].important = !this.todoData[i].important

    onToggleDone = (i) =>
        this.todoData[i].done = !this.todoData[i].done

    constructor(rootStore, initState) {
        super(rootStore);
        if (initState) {
            if (initState.todoData) {
                this.todoData = initState.todoData;
            }
        }
    }

    serialize = () => ({
        todoData: this.todoData
    });
}

decorate(TaskStore, {
    todoData: observable,
    addItem: action,
    deleteItem: action,
    onToggleImportant: action,
    onToggleDone: action,
})
