import { SubStore } from "./SubStore";
import { observable, action } from "mobx";

const initState = {
  todoData: [
    {
      label: "Drink Coffee",
      important: false,
      done: false
    },
    {
      label: "Create app",
      important: false,
      done: false
    },
    {
      label: "Drink more coffee",
      important: false,
      done: false
    }
  ]
};

export class TaskStore extends SubStore {
  @observable todoData = [];

  @action addItem = label =>
    this.todoData.push({
      label,
      important: false,
      done: false
    });

  @action deleteItem = i => this.todoData.splice(i, 1);

  constructor(rootStore /* initState */) {
    super(rootStore);
    if (initState) {
      if (initState.todoData) {
        this.todoData = initState.todoData;
      }
    }
  }

  serialize = () => {};
}
