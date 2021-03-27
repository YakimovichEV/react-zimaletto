import React from "react";

import { Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Route path="/" component={Home} exact />
            </div>
        </div>
    );
}

export default App;
