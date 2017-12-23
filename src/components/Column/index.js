import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tasksPerColumnSelector } from "../../reducers";
import { addTask } from "../../actions/tasks";
import AddTaskBtn from "./AddTaskBtn";
import AddTaskForm from "./AddTaskForm";
import Task from "../Task";

class Column extends Component {
  constructor() {
    super();

    this.state = {
      isAddingTask: false
    };

    this.renderTasks = this.renderTasks.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  renderTasks(tasks) {
    return tasks.map(task => <Task key={task.id} {...task} />);
  }

  handleToggle() {
    this.setState(function({ isAddingTask }) {
      return {
        isAddingTask: !isAddingTask
      };
    });
  }

  handleAddTask(task, priority) {
    const { addTask, id } = this.props;

    addTask(id, task, priority);
  }

  render() {
    const { tasks } = this.props;
    const { isAddingTask } = this.state;

    return (
      <div className="column">
        <div className="column__content">
          <div className="column__title">{this.props.name}</div>
          <AddTaskBtn toggleAddTask={this.handleToggle} />
          {isAddingTask && <AddTaskForm addTask={this.handleAddTask} />}
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

export const mapDispatchToProps = dispatch =>
  bindActionCreators(addTask, dispatch);

export default connect(mapStateToProps)(Column);
