import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import AllBoards from "./AllBoards";
import BoardList from "./BoardList/BoardList";
import BoardView from "./BoardView";
import CustomDragLayer from "./CustomDragLayer";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/boards"
          render={props => {
            return (
              <div className="kanban_ui">
                <BoardList {...props} />
                <div className="kanban_main">
                  <NavBar />
                  <AllBoards {...props} />
                </div>
              </div>
            );
          }}
        />
        <Route
          exact
          path="/board/:id"
          render={props => {
            return (
              <div className="kanban_ui">
                <BoardList {...props} />
                <div className="kanban_main">
                  <NavBar />
                  <BoardView {...props} />
                </div>
              </div>
            );
          }}
        />
        <Redirect to="/boards" />
      </Switch>
      <CustomDragLayer />
    </div>
  );
}
