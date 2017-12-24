import React, { Component } from "react";
import PriorityOption from "./PriorityOption";
import TextArea from "../TextArea";

class TaskForm extends Component {
  constructor(props) {
    super(props);

    const { value, priority } = props;

    this.state = {
      value: value || "",
      priority: priority || "low"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      const { value, priority } = this.state;
      const { submitTask } = this.props;

      submitTask(value, priority);

      this.setState({
        value: ""
      });
    }
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
      <form className="TaskForm" onSubmit={e => e.preventDefault()}>
        <div className="TaskForm__priorities">
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
          onKeyUp={this.handleSubmit}
        />
      </form>
    );
  }
}

export default TaskForm;
