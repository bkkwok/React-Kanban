import React, { Component } from "react";
import { connect } from "react-redux";
import { tasksPerColumnSelector } from "../reducers";
import Task from "./Task";
import add_icon from '../assets/add.svg';

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

    return (
      <div className="column">
        <div className="column__content">
          <div className="column__title">{this.props.name}</div>
          <div className="column__addButton"><img src={add_icon} className="add-task-icon" alt="addTask" /></div>
          <div className="column__tasks">{this.renderTasks(tasks)}</div>

        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => {
  const columnId = props.id;

  return {
    tasks: tasksPerColumnSelector(state, columnId)
  };
};

export default connect(mapStateToProps)(Column);
