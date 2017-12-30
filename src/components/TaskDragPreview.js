import React from "react";
import DropDownBtn from "./DropDown/DropDownBtn";
import ArrowIcon from "../assets/ArrowIcon";

export default function TaskDragPreview({ priority, timestamp, task, width, height }) {
  const classes = `task task_priority-${priority}`;
  const styles = {
    display: 'inline-block',
    transform: "rotate(-7deg)",
    WebkitTransform: "rotate(-7deg)",
    width: width + 'px',
    height: height + 'px'
  };

  return (
    <div style={styles}>
      <div className={classes}>
        <div className="task__timestamp">{timestamp}</div>
        <div className="task__task">{task}</div>
        <DropDownBtn className="task__dropdown">
          <ArrowIcon />
        </DropDownBtn>
      </div>
    </div>
  );
}
