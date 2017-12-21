import React, { Component } from "react";
import Column from "./Column";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { boardSelector, columnsPerBoardSelector } from "../reducers";

class BoardView extends Component {
  constructor() {
    super();

    this.renderColumns = this.renderColumns.bind(this);
  }

  renderColumns(columns) {
    console.log(columns);
    return columns.map(col => <Column key={col.id} {...col} />);
  }

  render() {
    console.log(this.props);
    const { from } = this.props.location.state || {
      from: { pathname: "/dashboard" }
    };

    const { board, columns } = this.props;

    if (!board) {
      return <Redirect to={from} />;
    }
    return (
      <div className="boardview">
        <div className="boardview__header">
          <div className="boardview__name">{board.name}</div>
        </div>
        <div className="columnsContainer">{this.renderColumns(columns)}</div>
      </div>
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
