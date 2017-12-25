import React, { Component } from "react";
import AddMinusIcon from "./AddMinusIcon";
import AddBoardInput from "./AddBoardInput";
import BoardItem from "./BoardItem";
import logo from "../../assets/logo.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as boardActions from "../../actions/boards";

class BoardList extends Component {
  constructor() {
    super();

    this.state = {
      isAddingBoard: false
    };

    this.handleAddBoard = this.handleAddBoard.bind(this);
    this.toggleAddBoard = this.toggleAddBoard.bind(this);
  }

  renderBoardItems() {
    const { boardItems, deleteBoard } = this.props;
    return Object.keys(boardItems).map(id => (
      <BoardItem
        key={id}
        id={id}
        deleteBoard={deleteBoard}
        {...boardItems[id]}
      />
    ));
  }

  toggleAddBoard() {
    this.setState(({ isAddingBoard }) => {
      return {
        isAddingBoard: !isAddingBoard
      };
    });
  }

  handleAddBoard(name) {
    this.props.addBoard(name);
    this.setState({ isAddingBoard: false });
  }

  render() {
    const { isAddingBoard } = this.state;
    const { addBoard } = this.props;
    const boardItems = this.renderBoardItems();
    return (
      <div className="BoardList">
        <div className="logo-wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="boardlist-title">
          <div className="bold-text icon-right">boards</div>
          <AddMinusIcon
            onClick={this.toggleAddBoard}
            isAddingBoard={isAddingBoard}
          />
        </div>
        {isAddingBoard && (
          <AddBoardInput handleAddBoard={this.handleAddBoard} />
        )}
        <div className="boardlist-content">{boardItems}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boardItems: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(boardActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
