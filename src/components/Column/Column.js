import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tasksPerColumnSelector } from "../../reducers";
import { addTask } from "../../actions/tasks";
import * as columnActions from "../../actions/columns";
import AddTaskBtn from "./AddTaskBtn";
import TaskForm from "../TaskForm/TaskForm";
import Task from "../Task";
import DropDown from "../DropDown/DropDown";
import DropDownBtn from "../DropDown/DropDownBtn";
import DropDownLink from "../DropDown/DropDownLink";
import Input from "../Input";
import ArrowIcon from "../../assets/ArrowIcon.js";

class Column extends Component {
  state = {
    isAddingTask: false,
    isRenaming: false,
    isDropDownActive: false
  };

  renderTasks = tasks => {
    const { id } = this.props;

    return tasks.map(task => <Task key={task.id} colId={id} {...task} />);
  };

  handleToggle = () => {
    this.setState(function({ isAddingTask }) {
      return {
        isAddingTask: !isAddingTask
      };
    });
  };

  handleAddTask = (task, priority) => {
    const { addTask, id } = this.props;
    addTask(id, task, priority);
  };

  showInput = e => {
    this.setState(() => {
      return { isRenaming: true, isDropDownActive: false };
    });
  };

  hideInput = () => {
    this.setState({ isRenaming: false, isDropDownActive: false });
  };

  handleEdit = name => {
    const { editColumn, id } = this.props;

    editColumn(id, name);
  };

  handleDelete = () => {
    const { deleteColumn, boardId, id } = this.props;

    deleteColumn(boardId, id);
  };

  showDropDown = e => {
    this.setState({
      isDropDownActive: true,
      xPos: e.pageX,
      yPos: e.pageY
    });
  };

  hideDropDown = () => {
    this.setState({ isDropDownActive: false, xPos: 0, yPos: 0 });
  };

  render() {
    const { tasks, name } = this.props;
    const {
      isAddingTask,
      isRenaming,
      isDropDownActive,
      xPos,
      yPos
    } = this.state;

    return (
      <div className="column">
        <div className="column__content">
          {isRenaming ? (
            <Input
              autoFocus
              value={name}
              className="column__input"
              submitFunc={this.handleEdit}
              hideInput={this.hideInput}
            />
          ) : (
            <div className="column__header">
              <div className="column__title">{name}</div>
              <DropDownBtn
                className="column__dropdown"
                onClick={this.showDropDown}
              >
                <ArrowIcon />
              </DropDownBtn>
              {isDropDownActive && (
                <DropDown
                  closeDropDown={this.hideDropDown}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <DropDownLink onClick={this.showInput}>Rename</DropDownLink>
                  <DropDownLink onClick={this.handleDelete}>
                    Delete
                  </DropDownLink>
                </DropDown>
              )}
            </div>
          )}

          <AddTaskBtn toggleAddTask={this.handleToggle} />
          {isAddingTask && <TaskForm submitTask={this.handleAddTask} />}
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

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...columnActions, addTask: addTask }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);
