import React, { Component } from "react";
import AddMinusIcon from "./AddMinusIcon";
import AddBoardInput from "./AddBoardInput";
import BoardItem from "./BoardItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as boardActions from "../../actions/boards";
import { collapseBoardList } from "../../actions/userinterface";
import { allBoardsSelector, getBoardListState } from "../../reducers";
import logo from "../../assets/logo.svg";
import cancel_icon from "../../assets/cancel.svg";
import cn from "classnames";

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

  hideBoardList = () => this.setState({ isCollapsed: true });

  render() {
    const { isAddingBoard } = this.state;
    const { isCollapsed, collapseBoardList } = this.props;
    const boardItems = this.renderBoardItems();
    const boardClass = cn("BoardList", { isCollapsed: isCollapsed });

    return (
      <div className={boardClass}>
        <div className="logo-wrap">
          <Link className="logo_with_name" to="/boards">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="plain_link">kanban</span>
          </Link>
          <div className="boardlist__cancel-icon" onClick={collapseBoardList}>
            <img src={cancel_icon} className="cancel-icon" alt="cancel" />
          </div>
        </div>
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
    boardItems: allBoardsSelector(state),
    isCollapsed: getBoardListState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...boardActions, collapseBoardList: collapseBoardList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
