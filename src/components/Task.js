import React, { Component } from "react";
import ArrowIcon from "../assets/ArrowIcon";
import { connect } from "react-redux";
import { deleteTask } from "../actions/tasks";
import cn from "classnames";

class Task extends Component {
  constructor() {
    super();

    this.state = {
      isToggled: false
    };

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleOutsideClick() {
    this.setState(function({ isToggled }) {
      if (isToggled) return { isToggled: false };
    });
  }

  toggleDropDown(e) {
    e.stopPropagation();
    this.setState(({ isToggled }) => {
      return {
        isToggled: !isToggled
      };
    });
  }

  handleDelete(e) {
    const { delTask, id, colId } = this.props;

    delTask(colId, id);
  }

  render() {
    console.log(this.props);
    const { isToggled } = this.state;
    const { task, priority, timestamp } = this.props;
    const classes = `task task_priority-${priority}`;
    const dropdownClass = cn("dropdown_content", {
      "dropdown-active": isToggled
    });

    return (
      <div className={classes}>
        <div className="task__timestamp">{timestamp}</div>
        <div className="task__task">{task}</div>
        <div className="dropdown_container">
          <ArrowIcon onClick={this.toggleDropDown} />
          <div className={dropdownClass} ref={el => (this.dropDown = el)}>
            <div className="dropdown_link" onClick={this.handleDelete}>
              delete
            </div>
            <div className="dropdown_link">edit</div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    delTask: (colId, taskId) => {
      dispatch(deleteTask(colId, taskId));
    }
  };
};

export default connect(null, mapDispatchToProps)(Task);
