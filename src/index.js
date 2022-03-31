import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Shop } from "./Components/reducers/shop";

const shopStore = createStore(Shop);
ReactDom.render(
  <Provider store={shopStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
