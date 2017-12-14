import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import createStore from "./createStore";
import "./styles/css/main.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
