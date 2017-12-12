import React, { Component } from 'react';
import './BoardList.css';
import './logo.css';
import logo from './logo.svg';

class BoardList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="BoardList">
        <div className="logo-wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

export default BoardList;