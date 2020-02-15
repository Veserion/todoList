import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";
import "./app.css";


@inject('taskStore')
@observer
class App extends React.Component {
  defId = 100;
  defDataId = 100;

  state = {
    term: ""
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.defId++
    };
  }

  createTodoItemInData(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.defDataId++
    };
  }


  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArray = [
        ...todoData.splice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  }

  onSearchChange = term => {
    this.setState({ term });
  };

  resetButton = () => {
    return this.setState(({ todoData }) => {
      return {
        todoData: this.data
      };
    });
  };

  activeButton = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter(item => !item.done);
      return {
        todoData: newArray
      };
    });
  };

  doneButton = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter(item => item.done);
      return {
        todoData: newArray
      };
    });
  };

  render() {
    const { todoData, term } = this.state;
    const doneCount = this.state.todoData.filter(el => el.done).length;
    const todoConst = this.state.todoData.filter(el => !el.done).length;
    const visibleItems = this.search(todoData, term);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoConst} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            resetButton={this.resetButton}
            activeButton={this.activeButton}
            doneButton={this.doneButton}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

export default App