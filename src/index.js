//react imports
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

//application import
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app-root"));
registerServiceWorker();
