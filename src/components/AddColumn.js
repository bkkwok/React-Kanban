import React, { Component } from "react";
import Input from "./Input";
import { connect } from "react-redux";
import { addColumn } from "../actions/columns";
import add_icon from "../assets/add.svg";

class AddColumn extends Component {
  constructor() {
    super();

    this.state = {
      isAdding: false
    };

    this.showInput = this.showInput.bind(this);
    this.hideInput = this.hideInput.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  showInput(e) {
    this.setState(({ isAdding }) => {
      return {
        isAdding: true
      };
    });
  }

  hideInput() {
    this.setState(({ isAdding }) => {
      return {
        isAdding: false
      };
    });
  }

  handleInputSubmit(columnName) {
    const { addColumn, boardId } = this.props;

    addColumn(boardId, columnName);
  }

  render() {
    const { isAdding, columnName } = this.state;

    return (
      <div className="addColumn column">
        {isAdding ? (
          <Input
            autoFocus
            placeholder="New Column"
            className="column__input"
            value={columnName}
            submitFunc={this.handleInputSubmit}
            hideInput={this.hideInput}
          />
        ) : (
          <div className="addColumn__btn" onClick={this.showInput}>
            <img src={add_icon} className="addColumn-icon" alt="+" />Add column
          </div>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addColumn: (boardId, columnName) => {
      dispatch(addColumn(boardId, columnName));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddColumn);
