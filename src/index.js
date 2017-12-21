import React from "react";
import { render } from "react-dom";
import createStore from "./createStore";
import "./styles/css/main.css";
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Root store={createStore()} />,
  document.getElementById("root")
);

registerServiceWorker();
