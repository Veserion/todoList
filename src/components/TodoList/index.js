import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';
import {inject, observer} from "mobx-react";

class _TodoList extends React.Component {

    render() {
        return <ul className='list-group todo-list'>
            {this.props.taskStore.todoData.map((item, key) =>
                <li className='list-group-item' key={key}>
                    <TodoListItem index={key} {...item}/>
                </li>)}
        </ul>
    }
}

const TodoList = inject("taskStore")(observer(_TodoList))


export default TodoList;
