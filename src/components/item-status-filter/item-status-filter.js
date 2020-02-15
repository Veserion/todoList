import React from "react";

export default class ItemStatusFilter extends React.Component {
  state = {
    buttonAll: true,
    buttonActive: false,
    buttonDone: false
  };

  createClickHandler = type => () => {
    const { resetButton, activeButton, doneButton } = this.props;
    const { buttonAll, buttonActive, buttonDone } = this.state;
    switch (type) {
      case "buttonAll":
        this.setState({
          buttonAll: !buttonAll,
          buttonActive: buttonAll,
          buttonDone: buttonAll
        });
        resetButton();
        break;
      case "buttonActive":
        this.setState({
          buttonAll: buttonActive,
          buttonActive: !buttonActive,
          buttonDone: buttonActive
        });
        activeButton();
        break;
      case "buttonDone":
        this.setState({
          buttonAll: buttonDone,
          buttonActive: buttonDone,
          buttonDone: !buttonDone
        });
        doneButton();
        break;
      default:
        break;
    }
  };

  render() {
    const { buttonAll, buttonActive, buttonDone } = this.state;
    return (
      <div>
        <button
          type="button"
          className={`btn btn-${buttonAll ? "info" : "outline-secondary"}`}
          disabled={buttonAll}
          onClick={this.createClickHandler("buttonAll")}
        >
          All
        </button>
        <button
          type="button"
          className={`btn btn-${buttonActive ? "info" : "outline-secondary"}`}
          disabled={buttonActive}
          onClick={this.createClickHandler("buttonActive")}
        >
          Active
        </button>
        <button
          type="button"
          className={`btn btn-${buttonDone ? "info" : "outline-secondary"}`}
          disabled={buttonDone}
          onClick={this.createClickHandler("buttonDone")}
        >
          Done
        </button>
      </div>
    );
  }
}
