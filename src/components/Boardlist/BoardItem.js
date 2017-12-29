import React, { Component } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { bindActionCreators } from "redux";
import * as boardActions from "../../actions/boards";
import Input from "../Input";
import DropDown from "../DropDown/DropDown";
import DropDownBtn from "../DropDown/DropDownBtn";
import DropDownLink from "../DropDown/DropDownLink";
import OptionIcon from "../../assets/OptionIcon";
import { Link } from "react-router-dom";

class BoardItem extends Component {
  state = {
    isRenaming: false,
    isDropDownActive: false
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
    this.setState({ isRenaming: true, isDropDownActive: false });
  };

  hideInput = () => {
    this.setState({ isRenaming: false });
  };

  showDropDown = e => {
    this.setState({ isDropDownActive: true, xPos: e.pageX, yPos: e.pageY });
  };

  hideDropDown = e => {
    this.setState({ isDropDownActive: false, xPos: 0, yPos: 0 });
  };

  render() {
    const { isRenaming, isDropDownActive, xPos, yPos } = this.state;
    const { id, name, isActive } = this.props;

    const classes = cn(`boardlist__boarditem`, { boarditem__active: isActive });
    const linkClass = cn("boarditem__name plain_link", {
      "boarditem__name-active": isActive
    });

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
          <div className={classes}>
            <div className="boarditem__row">
              <Link className={linkClass} to={`/board/${id}`}>
                {name}
              </Link>
              <DropDownBtn
                className="boarditem__dropdown"
                onClick={this.showDropDown}
              >
                <OptionIcon />
              </DropDownBtn>
              {isDropDownActive && (
                <DropDown
                  closeDropDown={this.hideDropDown}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <DropDownLink onClick={this.showInput}>Rename</DropDownLink>
                  <DropDownLink onClick={this.handleDelete}>
                    Delete
                  </DropDownLink>
                </DropDown>
              )}
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
