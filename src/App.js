import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";

import { Home } from "./pages/Home";

function App() {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
            </div>
        </div>
    );
}

export default App;
