import React, { Component } from 'react';
import Header from '../Header';
import MainBodySplit from '../MainBodySplit';
import BoardList from '../BoardList';
import Board from '../Board';
import './App.css';

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
