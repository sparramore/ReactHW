import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App basename={process.env.PUBLIC_URL} />, document.getElementById("root"));
