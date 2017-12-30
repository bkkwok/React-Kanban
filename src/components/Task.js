import React, { Component } from "react";
import TaskForm from "./TaskForm/TaskForm";
import DropDown from "./DropDown/DropDown";
import DropDownBtn from "./DropDown/DropDownBtn";
import DropDownLink from "./DropDown/DropDownLink";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../actions/tasks";
import ArrowIcon from "../assets/ArrowIcon";
import { DragSource } from "react-dnd";
import { ItemTypes } from "../Constants";
import omit from "lodash.omit";
import { getEmptyImage } from "react-dnd-html5-backend";
import cn from 'classnames';

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
  };

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

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  componentDidMount() {
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true
    });
  }

  render() {
    const { isEditting, isDropDownActive, xPos, yPos } = this.state;
    const { task, priority, timestamp, connectDragSource, isDragging } = this.props;
    const classes = cn('task', `task_priority-${priority}`, {isDragging: isDragging});

    return isEditting ? (
      <TaskForm
        value={task}
        priority={priority}
        submitTask={this.handleEditSubmit}
      />
    ) : (
      connectDragSource(
        <div className={classes} ref={this.setWrapperRef}>
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
      )
    )
  }
}

const dragSource = {
  beginDrag: function(props, monitor, component) {
    const { width, height } = component.wrapperRef.getBoundingClientRect();

    return {
      fromColumnId: props.colId,
      taskId: props.id,
      priority: props.priority,
      task: props.task,
      timestamp: props.timestamp,
      width: width,
      height: height
    };
  },
  endDrag: function(props, monitor, component) {
    const result = monitor.getDropResult();

    if (result === null) return;

    const { fromColumnId, toColumnId, taskId } = monitor.getDropResult();

    if (fromColumnId === toColumnId) return;

    props.moveTask(fromColumnId, toColumnId, taskId);
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(taskActions, dispatch);

export default connect(null, mapDispatchToProps)(
  DragSource(ItemTypes.TASK, dragSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }))(Task)
);
