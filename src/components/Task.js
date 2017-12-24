import React, { Component } from "react";
import ArrowIcon from "../assets/ArrowIcon";
import TaskForm from "./TaskForm/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../actions/tasks";
import cn from "classnames";

class Task extends Component {
  constructor() {
    super();

    this.state = {
      isDropDownToggled: false,
      isEditting: false
    };

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleOutsideClick() {
    this.setState(function({ isDropDownToggled }) {
      if (isDropDownToggled) return { isDropDownToggled: false };
    });
  }

  toggleDropDown(e) {
    e.stopPropagation();
    this.setState(({ isDropDownToggled }) => {
      return {
        isDropDownToggled: !isDropDownToggled
      };
    });
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
    const { isDropDownToggled, isEditting } = this.state;
    const { task, priority, timestamp, editTask } = this.props;
    const classes = `task task_priority-${priority}`;
    const dropdownClass = cn("dropdown_content", {
      "dropdown-active": isDropDownToggled
    });

    return isEditting ? (
      <TaskForm value={task} priority={priority} submitTask={this.handleEditSubmit}/>
    ) : (
      <div className={classes}>
        <div className="task__timestamp">{timestamp}</div>
        <div className="task__task">{task}</div>
        <div className="dropdown_container">
          <ArrowIcon onClick={this.toggleDropDown} />
          <div className={dropdownClass} ref={el => (this.dropDown = el)}>
            <div className="dropdown_link" onClick={this.handleDelete}>
              delete
            </div>
            <div className="dropdown_link" onClick={this.showEdit}>
              edit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch);

export default connect(null, mapDispatchToProps)(Task);
