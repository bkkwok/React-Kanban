import React, { Component } from "react";

class MainBodySplit extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="MainBodySplit">
        {children}
      </div>
    );
  }
}

export default MainBodySplit;
