import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const dropDownRoot = document.getElementById("dropdown-root");

class Dropdown extends Component {
  static propTypes: {
    closeDropDown: PropTypes.func.isRequired,
    xPos: PropTypes.number.isRequired,
    yPos: PropTypes.number.isRequired
  };

  componentDidMount() {
    window.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleOutsideClick = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.props.closeDropDown();
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  render() {
    const { xPos, yPos, children } = this.props;
    const styles = { top: yPos + 12 + "px", left: xPos - 7 + "px" };

    return createPortal(
      <div
        className="dropdown__container"
        style={styles}
        ref={this.setWrapperRef}
      >
        <div className="dropdown">{children}</div>
      </div>,
      dropDownRoot
    );
  }
}

export default Dropdown;
