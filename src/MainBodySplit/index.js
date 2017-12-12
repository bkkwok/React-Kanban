import React, { Component } from 'react';
import './MainBodySplit.css';

class MainBodySplit extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="MainBodySplit">
        {this.props.leftSide}
        {this.props.rightSide}
      </div>
    )
  }
}

export default MainBodySplit;