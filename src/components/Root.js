import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <main className="app-wrap">
            <App />
          </main>
        </Router>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(Root);
