import React, { Component } from "react";
import AddMinusIcon from "./AddMinusIcon";
import AddBoardInput from "./AddBoardInput";
import BoardItem from "./BoardItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as boardActions from "../../actions/boards";
import { allBoardsSelector } from "../../reducers";
import logo from "../../assets/logo.svg";

class BoardList extends Component {
  state = {
    isAddingBoard: false
  };

  renderBoardItems = () => {
    const { boardItems, deleteBoard, match } = this.props;
    return boardItems.map(board => {
      return (
        <BoardItem
          key={board.id}
          isActive={board.id == match.params.id}
          deleteBoard={deleteBoard}
          {...board}
        />
      );
    });
  };

  toggleAddBoard = () => {
    this.setState(({ isAddingBoard }) => {
      return {
        isAddingBoard: !isAddingBoard
      };
    });
  };

  handleAddBoard = name => {
    this.props.addBoard(name);
    this.setState({ isAddingBoard: false });
  };

  render() {
    const { isAddingBoard } = this.state;
    const boardItems = this.renderBoardItems();

    return (
      <div className="BoardList">
        <Link to="/boards">
          <div className="logo-wrap">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Link>
        <div className="boardlist-title">
          <div className="bold-text icon-right">
            <Link className="plain_link" to="/boards">
              boards
            </Link>
          </div>
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
    boardItems: allBoardsSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(boardActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
