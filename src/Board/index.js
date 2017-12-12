import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import './Board.css';


class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Board">
        <SearchBar />
      </div>
    )
  }
}

export default Board;