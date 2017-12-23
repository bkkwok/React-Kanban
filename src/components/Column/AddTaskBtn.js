import React, { Component } from "react";
import add_icon from "../../assets/add.svg";

export default function AddTaskBtn({ toggleAddTask }) {
  return (
    <div className="column__addButton" onClick={toggleAddTask}>
      <img src={add_icon} className="add-task-icon" alt="addTask" />
    </div>
  );
}
