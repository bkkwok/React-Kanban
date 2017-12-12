import React, { Component } from 'react';
import MainBodySplit from '../MainBodySplit';
import BoardList from '../BoardList';
import Board from '../Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBodySplit
          leftSide={<BoardList />}
          rightSide={<Board />}
        />
      </div>
    );
  }
}

export default App;
