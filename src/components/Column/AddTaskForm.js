import React, { Component } from "react";
import PriorityOption from "./PriorityOption";
import TextArea from './TextArea';

class AddTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      priority: "low"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addTask(this.state.value);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleToggle(priority) {
    this.setState({ priority: priority });
  }

  render() {
    const { value, priority } = this.state;

    return (
      <form className="AddTaskForm" onSubmit={this.handleSubmit}>
        <div className="AddTaskForm__priorities">
          <PriorityOption
            selected={priority}
            level="low"
            togglePriority={this.handleToggle}
          />
          <PriorityOption
            selected={priority}
            level="medium"
            togglePriority={this.handleToggle}
          />
          <PriorityOption
            selected={priority}
            level="high"
            togglePriority={this.handleToggle}
          />
        </div>
            <TextArea
          autoFocus
          className="autogrow_textarea"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default AddTaskForm;
