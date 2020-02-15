import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";
import "./app.css";
import {inject, observer} from "mobx-react";


class _App extends React.Component {
    render() {
        const {todoData} = this.props.taskStore;
        const doneCount = todoData.filter(el => el.done).length;
        const todoConst = todoData.filter(el => !el.done).length;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoConst} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    {/*<ItemStatusFilter/>*/}
                </div>

                <TodoList/>
                <ItemAddForm/>
            </div>
        );
    }
}

const App = inject("taskStore")(observer(_App))

export default App
