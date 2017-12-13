import React, { Component } from 'react';
import plus from '../assets/plus.svg';
import logo from '../assets/logo.svg';

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
        <div className="boardlist-content">
          <div className="boardlist-title">
            <div className="bold-text icon-right">
              boards
            </div>
            <img src={plus} className="plus-icon" alt="add board" />
          </div>
        </div>
      </div>
    )
  }
}

export default BoardList;