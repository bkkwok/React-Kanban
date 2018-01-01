import React, { Component } from "react";
import PropTypes from "prop-types";
import omit from "lodash.omit";

class Input extends Component {
  static propTypes = {
    hideInput: PropTypes.func.isRequired,
    submitFunc: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: ""
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  componentDidMount() {
    window.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const { submitFunc, hideInput } = this.props;
    const { value } = this.state;

    if (e.keyCode === 13) {
      if (value.length > 0) {
        submitFunc(value);
      }

      hideInput();
    }
  };

  handleOutsideClick = e => {
    const { submitFunc, hideInput } = this.props;
    const { value } = this.state;

    if(this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      if (value.length > 0) {
        submitFunc(value);
      }

      hideInput();
    }
  };

  getProps = () => {
    return omit(this.props, ["submitFunc", "hideInput", "value"]);
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  setCursorAtEnd = e => {
    const el = e.target;

    if(el.setSelectionRange) {
      const len = el.value.length * 2;

      setTimeout(function() {
        el.setSelectionRange(len, len);
      })
    }
  }

  render() {
    return (
      <input
        {...this.getProps()}
        onFocus={this.setCursorAtEnd}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyUp={this.handleSubmit}
        ref={this.setWrapperRef}
      />
    );
  }
}

export default Input;
