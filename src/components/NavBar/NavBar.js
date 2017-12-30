import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showBoardList } from "../../actions/userinterface";
import { getBoardListState } from "../../reducers";
import SearchBar from "./SearchBar";
import menu_icon from "../../assets/menu-icon.svg";

class NavBar extends Component {
  render() {
    const { isBoardListCollapsed, showBoardList } = this.props;

    return (
      <div className="navbar">
        {isBoardListCollapsed && (
          <div className="navbar__menu-icon" onClick={showBoardList}>
            <img className="menu-icon" src={menu_icon} alt="menu" />
          </div>
        )}
        <SearchBar />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isBoardListCollapsed: getBoardListState(state)
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ showBoardList: showBoardList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
