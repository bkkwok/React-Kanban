import React, { Component } from "react";
import Column from "./Column/Column";
import AddColumn from "./AddColumn";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { boardSelector, columnsPerBoardSelector } from "../reducers";
import withScrolling from 'react-dnd-scrollzone';

const ScrollingComponent = withScrolling('div');

class BoardView extends Component {
  constructor() {
    super();

    this.renderColumns = this.renderColumns.bind(this);
  }

  renderColumns(columns) {
    return columns.map(col => (
      <Column key={col.id} boardId={this.props.board.id} {...col} />
    ));
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/boards" }
    };

    const { board, columns } = this.props;

    if (!board) {
      return <Redirect to={from} />;
    }

    return (
      <ScrollingComponent className="boardview">
        <div className="boardview__header">
          <div className="boardview__name">{board.name}</div>
        </div>
        <div className="columnsContainer">
          {this.renderColumns(columns)}
          <AddColumn boardId={board.id} />
        </div>
      </ScrollingComponent>
    );
  }
}

export const mapStateToProps = (state, props) => {
  const boardId = props.match.params.id;

  return {
    board: boardSelector(state, boardId),
    columns: columnsPerBoardSelector(state, boardId)
  };
};

export default connect(mapStateToProps)(BoardView);
