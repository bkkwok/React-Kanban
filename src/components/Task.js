import React, { Component } from 'react';

class Task extends Component {
  constructor() {
    super();
  }

  render() {
    const { task, priority } = this.props;
    return (
      <div>
        {task}
        {priority}
      </div>
    )
  }
}

export default Task;