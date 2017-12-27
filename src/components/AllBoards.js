import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as boardActions from "../actions/boards";
import { allBoardsSelector } from "../reducers";

class AllBoards extends Component {
  constructor() {
    super();
  }

  render() {
    const { allBoards } = this.props;
    return <div className="allBoards_container">
    </div>;
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
