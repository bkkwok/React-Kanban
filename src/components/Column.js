import React, { Component } from "react";
import { connect } from "react-redux";
import { tasksPerColumnSelector } from "../reducers";
import Task from "./Task";

class Column extends Component {
  constructor() {
    super();

    this.renderTasks = this.renderTasks.bind(this);
  }

  renderTasks(tasks) {
    return tasks.map(task => <Task key={task.id} {...task} />);
  }

  render() {
    const { tasks } = this.props;
    console.log("column props", this.props);
    return <div>{this.props.name}
      {this.renderTasks(tasks)}
    </div>;
  }
}

export const mapStateToProps = (state, props) => {
  const columnId = props.id;

  return {
    tasks: tasksPerColumnSelector(state, columnId)
  };
};

export default connect(mapStateToProps)(Column);
