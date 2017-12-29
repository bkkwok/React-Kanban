import React, { Component } from "react";
import TaskForm from "./TaskForm/TaskForm";
import DropDown from "./DropDown/DropDown";
import DropDownBtn from "./DropDown/DropDownBtn";
import DropDownLink from "./DropDown/DropDownLink";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../actions/tasks";
import ArrowIcon from "../assets/ArrowIcon";

class Task extends Component {
  state = {
    isEditting: false,
    isDropDownActive: false
  };

  showEdit = e => {
    this.setState(({ isEditting }) => {
      return {
        isDropDownActive: false,
        isEditting: true
      };
    });
  }

  handleDelete = e => {
    const { deleteTask, id, colId } = this.props;

    deleteTask(colId, id);
  };

  handleEditSubmit = (task, priority) => {
    const { editTask, id } = this.props;

    editTask(id, task, priority);

    this.setState(({ isEditting }) => {
      return {
        isEditting: false
      };
    });
  };

  showDropDown = e => {
    this.setState({ isDropDownActive: true, xPos: e.pageX, yPos: e.pageY });
  };

  hideDropDown = () => {
    this.setState({ isDropDownActive: false, xPos: 0, yPos: 0 });
  };

  render() {
    const { isEditting, isDropDownActive, xPos, yPos } = this.state;
    const { task, priority, timestamp } = this.props;
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
        <DropDownBtn className="task__dropdown" onClick={this.showDropDown}>
          <ArrowIcon />
        </DropDownBtn>
        {isDropDownActive && (
          <DropDown closeDropDown={this.hideDropDown} xPos={xPos} yPos={yPos}>
            <DropDownLink onClick={this.handleDelete}>Delete</DropDownLink>
            <DropDownLink onClick={this.showEdit}>Edit</DropDownLink>
          </DropDown>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch);

export default connect(null, mapDispatchToProps)(Task);
