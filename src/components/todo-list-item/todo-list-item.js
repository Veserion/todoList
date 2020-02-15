import React from "react";
import "./todo-list-item.css";
import {inject, observer} from "mobx-react";

class _TodoListItem extends React.Component {


    render() {
        const {label, done, important, index} = this.props;

        let classNames = "todo-list-item ";
        if (done) {
            classNames += " done";
        }

        if (important) {
            classNames += " important";
        }

        const {deleteItem, onToggleDone, onToggleImportant} = this.props.taskStore;

        return (
            <span className={classNames}>
        <span className="todo-list-item-label" onClick={() => onToggleDone(index)}>
          {label}
        </span>
        <span>
          <button
              type="button"
              className="btn btn-outline-success btn-sm"
              onClick={() => onToggleImportant(index)}
          >
            <i className="fa fa-exclamation"/>
          </button>

          <button type="button" className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteItem(index)}>
            <i className="fa fa-trash-o"/>
          </button>
        </span>
      </span>
        );
    }
}
const TodoListItem = inject("taskStore")(observer(_TodoListItem))

export default TodoListItem
