import React, { Component } from "react";
import AddMinusIcon from "./AddMinusIcon";
import AddBoardInput from "./AddBoardInput";
import logo from "../../assets/logo.svg";

class BoardList extends Component {
  constructor() {
    super();

    this.state = {
      isAddingBoard: false
    };

    this.handleAddBoard = this.handleAddBoard.bind(this);
  }

  handleAddBoard() {
    this.setState(({ isAddingBoard }) => {
      return {
        isAddingBoard: !isAddingBoard
      };
    });
  }

  render() {
    const { isAddingBoard } = this.state;
    return (
      <div className="BoardList">
        <div className="logo-wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="boardlist-content">
          <div className="boardlist-title">
            <div className="bold-text icon-right">boards</div>
            <AddMinusIcon
              onClick={this.handleAddBoard}
              isAddingBoard={isAddingBoard}
            />
          </div>
          {isAddingBoard && <AddBoardInput />}
        </div>
      </div>
    );
  }
}

export default BoardList;
