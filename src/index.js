import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./scss/style.scss";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </QueryClientProvider>,
    document.getElementById("root")
);
