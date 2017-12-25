import React, { Component } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

class Dropdown extends Component {
  static propTypes: {
    icon: PropTypes.any.isRequired
  };

  state = {
    isActive: false
  };

  componentDidMount() {
    window.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick, false);
  }

  toggleDropDown = e => {
    e.stopPropagation();

    this.setState(({ isActive }) => ({ isActive: !isActive }))
  };

  handleOutsideClick = () => {
    this.setState({ isActive: false })
  };

  render() {
    const { icon, children, containerClass } = this.props;
    const { isActive } = this.state;

    const classes = cn("dropdown_content", {
      "dropdown-active": isActive
    });

    return (
      <div className={containerClass} onClick={this.toggleDropDown}>
        <div className="dropdown_toggle">
          {icon}
        </div>
        <div className={classes}>{children}</div>
      </div>
    );
  }
}

export default Dropdown;
