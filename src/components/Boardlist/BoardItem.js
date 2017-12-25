import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as boardActions from "../../actions/boards";
import Input from "../Input";
import Dropdown from "../Dropdown/Dropdown";
import DropdownLink from "../Dropdown/DropdownLink";
import OptionIcon from "../../assets/OptionIcon";
import { Link } from 'react-router-dom';

class BoardItem extends Component {
  state = {
    isRenaming: false
  };

  handleDelete = () => {
    const { id, deleteBoard } = this.props;
    deleteBoard(id);
  };

  handleEdit = name => {
    const { id, editBoard } = this.props;
    editBoard(id, name);
  };

  showInput = () => {
    this.setState({ isRenaming: true });
  };

  hideInput = () => {
    this.setState({ isRenaming: false });
  };
  render() {
    const { isRenaming } = this.state;

    const { id, name, deleteBoard } = this.props;

    return (
      <div>
        {isRenaming ? (
          <Input
            value={name}
            submitFunc={this.handleEdit}
            hideInput={this.hideInput}
            autoFocus
          />
        ) : (
          <div className="boardlist__boarditem">
            <div className="boarditem__row">
              <Link className="boarditem__name" to={`/board/${id}`}>{name}</Link>
              <Dropdown
                containerClass="boarditem__dropdown_container"
                icon={<OptionIcon />}
              >
                <DropdownLink onClick={this.showInput}>Rename</DropdownLink>
                <DropdownLink onClick={this.handleDelete}>Delete</DropdownLink>
              </Dropdown>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(boardActions, dispatch);

export default connect(null, mapDispatchToProps)(BoardItem);
