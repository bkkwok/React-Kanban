import React, { Component } from "react";
import ArrowIcon from "../assets/ArrowIcon";
import TaskForm from "./TaskForm/TaskForm";
import Dropdown from "./Dropdown/Dropdown";
import DropdownLink from "./Dropdown/DropdownLink";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../actions/tasks";

class Task extends Component {
  constructor() {
    super();

    this.state = {
      isDropDownToggled: false,
      isEditting: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  showEdit(e) {
    this.setState(({ isEditting }) => {
      return {
        isEditting: true
      };
    });
  }

  handleDelete(e) {
    const { deleteTask, id, colId } = this.props;

    deleteTask(colId, id);
  }

  handleEditSubmit(task, priority) {
    const { editTask, id } = this.props;

    editTask(id, task, priority);

    this.setState(({ isEditting }) => {
      return {
        isEditting: false
      };
    });
  }

  render() {
    const { isEditting } = this.state;
    const { task, priority, timestamp, editTask } = this.props;
    const classes = `task task_priority-${priority}`;

    return isEditting ? (
      <TaskForm
        value={task}
        priority={priority}
        submitTask={this.handleEditSubmit}
      />
    ) : (
      <div className={classes}>
        <div className="task__timestamp">{timestamp}</div>
        <div className="task__task">{task}</div>
        <Dropdown icon={<ArrowIcon />} containerClass="task__dropdown_container">
          <DropdownLink onClick={this.handleDelete}>Delete</DropdownLink>
          <DropdownLink onClick={this.showEdit}>Edit</DropdownLink>
        </Dropdown>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch);

export default connect(null, mapDispatchToProps)(Task);
