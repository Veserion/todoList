import React from "react";
import "./search-panel.css";
import {inject, observer} from "mobx-react";

export default class _SearchPanel extends React.Component {

  onSearchChange = ({target: {value: term}}) => {

  };
  render() {
    return (
      <input
        id="searchInput"
        className="search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
