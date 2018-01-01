import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { DragDropContext } from "react-dnd";
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

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

export default DragDropContext(MultiBackend(HTML5toTouch))(Root);
