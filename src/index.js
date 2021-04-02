import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./scss/style.scss";
import App from "./App";

ReactDOM.render(
    <Router>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Router>,
    document.getElementById("root")
);
