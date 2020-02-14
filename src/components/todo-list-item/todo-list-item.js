import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {

  onLabelClick = () => {
    this.setState(state => {
      return {
        done: !state.done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(state => {
      return {
        important: !state.important
      };
    });
  };

  render() {
    const { label, onDeleted, onToggleDone, onToggleImportant, done, important } = this.props;
    // const { done, important } = this.state;

    let classNames = "todo-list-item ";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <span>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation" />
          </button>

          <button type="button" className="btn btn-outline-danger btn-sm"
          onClick = {onDeleted}>
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </span>
    );
  }
}
