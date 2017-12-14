import React, { Component } from "react";

class BoardItem extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { id, deleteBoard } = this.props;
    deleteBoard(id);
  }

  render() {
    const { id, name, deleteBoard } = this.props;
    return (
      <div className="boardlist__boarditem">
        {name}
        <button onClick={this.handleDelete}>delete</button>
      </div>
    );
  }
}

export default BoardItem;
