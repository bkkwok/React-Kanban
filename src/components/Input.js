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
    e.stopPropagation();

    const { submitFunc, hideInput } = this.props;
    const { value } = this.state;

    if (value.length > 0) {
      submitFunc(value);
    }

    hideInput();
  };

  getProps = () => {
    return omit(this.props, ["submitFunc", "hideInput", "value"]);
  };

  componentDidMount() {
    window.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick, false);
  }

  render() {
    const props = this.getProps();
    console.log(props);
    return (
      <input
        {...this.getProps()}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyUp={this.handleSubmit}
        onClick={e => e.stopPropagation()}
      />
    );
  }
}

export default Input;
