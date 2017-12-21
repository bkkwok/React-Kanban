import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <main className='app-wrap'>
        <App />
      </main>
    </Router>
  </Provider>
);

export default Root;
