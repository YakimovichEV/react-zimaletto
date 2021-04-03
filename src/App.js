import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Delivery from "./pages/Delivery";

import { Home } from "./pages/Home";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/delivery" component={Delivery} exact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
