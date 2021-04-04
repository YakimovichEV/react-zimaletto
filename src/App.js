import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home";
import { Delivery } from "./pages/Delivery";
import { Payment } from "./pages/Payment";
import { Cart } from "./pages/Cart";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/delivery" component={Delivery} exact />
                <Route path="/payment" component={Payment} exact />
                <Route path="/cart" component={Cart} exact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
