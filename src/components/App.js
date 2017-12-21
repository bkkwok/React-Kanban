import React, { Component } from 'react';
import MainBodySplit from './MainBodySplit';
import BoardList from './Boardlist';
import Board from './Board';
import SearchBar from "./SearchBar";
import BoardView from "./BoardView";

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <MainBodySplit>
          <BoardList />
          <Board />
        </MainBodySplit>
      </div>
    );
  }
}

export default App;
