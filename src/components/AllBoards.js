import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as boardActions from "../actions/boards";
import { allBoardsSelector } from "../reducers";
import DeleteIcon from "../assets/DeleteIcon";

class AllBoards extends Component {
  state = {
    boardName: "",
    isAdding: false
  };

  hideInput = () => this.setState({ isAdding: false, boardName: "" });

  showInput = () => this.setState({ isAdding: true });

  handleChange = e => this.setState({ boardName: e.target.value });

  handleEnterKey = e => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    const { addBoard } = this.props;
    const { boardName } = this.state;

    if(boardName.length > 0) {
      addBoard(boardName);
      this.hideInput();
    }
  };

  renderCards = () => {
    const { allBoards, deleteBoard } = this.props;

    return allBoards.map(board => {
      return (
        <div key={board.id} className="card card-goTo">
          <Link to={`/board/${board.id}`} />
          <DeleteIcon
            className="delete-icon card__delete-icon"
            onClick={deleteBoard.bind(null, board.id)}
          />
          <div className="card__name">{board.name}</div>
        </div>
      );
    });
  };

  render() {
    const { isAdding, boardName } = this.state;

    return (
      <div className="allBoards_container">
        <div className="card_container">
          {isAdding ? (
            <div className="card card-boardForm">
              <DeleteIcon
                className="delete-icon boardForm__delete-icon"
                onClick={this.hideInput}
              />
              <div className="boardForm__header">Create Board</div>
              <div className="boardForm__label">Title</div>
              <input
                autoFocus
                value={boardName}
                className="boardForm__input"
                type="text"
                onChange={this.handleChange}
                onKeyUp={this.handleEnterKey}
              />
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Create
              </button>
            </div>
          ) : (
            <div className="card card-addBoard" onClick={this.showInput}>
              <div className="card__name">Create new board. . .</div>
            </div>
          )}
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    allBoards: allBoardsSelector(state)
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(boardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllBoards);
