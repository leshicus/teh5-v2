import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { debug } from "debug";

ReactDOM.render(<App />, document.getElementById("root"));

// * HMR
if (module.hot) {
  module.hot.accept();
}

debug("message");
