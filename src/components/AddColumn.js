import React, { Component } from "react";
import { connect } from "react-redux";
import { addColumn } from "../actions/columns";
import add_icon from "../assets/add.svg";

class AddColumn extends Component {
  constructor() {
    super();

    this.state = {
      isAdding: false,
      columnName: ""
    };

    this.showInput = this.showInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick, false);
  }

  showInput(e) {
    e.stopPropagation();

    this.setState(({ isAdding }) => {
      return {
        isAdding: true
      };
    });
  }

  handleOutsideClick(e) {
    e.stopPropagation();

    const { columnName } = this.state;
    const { boardId, addColumn } = this.props;

    if (columnName.length > 0) {
      addColumn(boardId, columnName);
    }

    this.setState({ isAdding: false, columnName: "" });
  }

  handleChange(e) {
    this.setState({ columnName: e.target.value });
  }

  handleSubmit(e) {
    const { addColumn, boardId } = this.props;
    const { columnName } = this.state;

    if (e.keyCode === 13) {
      if (columnName.length > 0) {
        addColumn(boardId, columnName);
      }

      this.setState({ isAdding: false, columnName: "" });
    }
  }

  render() {
    const { isAdding, columnName } = this.state;

    return (
      <div className="addColumn column">
        {isAdding ? (
          <input
            autoFocus
            placeholder="New Column"
            className="column__input"
            type="text"
            value={columnName}
            onClick={e => e.stopPropagation()}
            onChange={this.handleChange}
            onKeyUp={this.handleSubmit}
          />
        ) : (
          <div className="addColumn__btn" onClick={this.showInput}>
            <img src={add_icon} className="addColumn-icon" alt="+" />Add column
          </div>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addColumn: (boardId, columnName) => {
      dispatch(addColumn(boardId, columnName));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddColumn);
