import React from "react";

export default class ItemStatusFilter extends React.Component {
  state = {
    buttonAll: "btn btn-outline-secondary",
    buttonActive: "btn btn-outline-secondary",
    buttonDone: "btn btn-outline-secondary"
  };

  activateButton = buttonType => {
    this.setState(buttonType => {
      buttonType = this.state.buttonType;
      if (buttonType === "btn btn-outline-secondary") {
        return {
          buttonType: "btn btn-info"
        };
      } else {
        return {
          buttonType: "btn btn-info"
        };
      }
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className={this.state}
          onClick={() => {
            this.props.resetButton;
            // this.activateButton("buttonAll");
          }}
        >
          All
        </button>
        <button
          type="button"
          className={this.state}
          onClick={() => {
            this.props.activeButton;
            // this.activateButton("buttonActive");
          }}
        >
          Active
        </button>
        <button
          type="button"
          className={this.state}
          onClick={() => {
            this.props.doneButton;
            // this.activateButton("buttonDone");
          }}
        >
          Done
        </button>
      </div>
    );
  }
}
