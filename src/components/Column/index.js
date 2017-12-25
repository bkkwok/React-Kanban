import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tasksPerColumnSelector } from "../../reducers";
import { addTask } from "../../actions/tasks";
import * as columnActions from "../../actions/columns";
import AddTaskBtn from "./AddTaskBtn";
import TaskForm from "../TaskForm/TaskForm";
import Task from "../Task";
import Dropdown from "../Dropdown/Dropdown";
import DropdownLink from "../Dropdown/DropdownLink";
import ArrowIcon from "../../assets/ArrowIcon";
import Input from "../Input";

class Column extends Component {
  state = {
    isAddingTask: false,
    isRenaming: false
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

  showInput = () => {
    this.setState({ isRenaming: true });
  };

  hideInput = () => {
    this.setState({ isRenaming: false });
  };

  handleEdit = name => {
    const { editColumn, id } = this.props;

    editColumn(id, name);
  };

  handleDelete = () => {
    const { deleteColumn, boardId, id } = this.props;
    deleteColumn(boardId, id);
  };

  render() {
    const { tasks, name } = this.props;
    const { isAddingTask, isRenaming } = this.state;

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
              <div className="column__dropdown_container">
                <Dropdown
                  icon={<ArrowIcon />}
                  containerClass="column__dropdown"
                >
                  <DropdownLink onClick={this.showInput}>Rename</DropdownLink>
                  <DropdownLink onClick={this.handleDelete}>
                    Delete
                  </DropdownLink>
                </Dropdown>
              </div>
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
