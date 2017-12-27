import React, { Component } from "react";
import SearchBar from "./SearchBar";
import DashBoard from "./DashBoard";
import { Route, Switch, Redirect } from "react-router-dom";
import BoardView from "./BoardView";

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Board">
        <SearchBar />
        <div className="Board__Main">
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/board/:id+" component={BoardView} />
            <Redirect to="/dashboard" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Board;
