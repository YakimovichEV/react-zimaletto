import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home";
import { Delivery } from "./pages/Delivery";
import { Payment } from "./pages/Payment";
import { Contacts } from "./pages/Contacts";
import { Cart } from "./pages/Cart";
import { TermsConditions } from "./pages/TermsConditions";
import { ConfidentialityPolicy } from "./pages/ConfidentialityPolicy";
import { Product } from "./pages/Product";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/delivery" component={Delivery} exact />
                <Route path="/payment" component={Payment} exact />
                <Route path="/contacts" component={Contacts} exact />
                <Route path="/cart" component={Cart} exact />
                <Route
                    path="/terms-conditions"
                    component={TermsConditions}
                    exact
                />
                <Route
                    path="/confidentiality-policy"
                    component={ConfidentialityPolicy}
                    exact
                />
                <Route path="/product" component={Product} exact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
