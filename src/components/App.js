import React from "react";
import { Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import AllBoards from "./AllBoards";
import BoardList from "./BoardList/BoardList";
import BoardView from "./BoardView";

export default function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/boards"
        render={props => {
          return (
            <div className="kanban_ui">
              <BoardList {...props} />
              <div className="kanban_main">
                <SearchBar />
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
                <SearchBar />
                <BoardView {...props} />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
