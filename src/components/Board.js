import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BoardView from "./BoardView";

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Board">
        <SearchBar />
        <BoardView />
      </div>
    );
  }
}

export default Board;
