import React, { Component } from "react";

class AddBoardInput extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.input.select();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    const { value } = this.state;

    if (e.keyCode === 13) {
      if(value.length > 0) {
        this.props.handleAddBoard(this.state.value);
      }
    }
  }

  render() {
    return (
        <input
          ref={node => this.input = node}
          type="text"
          value={this.state.value}
          onKeyUp={this.handleSubmit}
          onChange={this.handleChange}
          className="boardlist__input"
        />
    );
  }
}

export default AddBoardInput;
