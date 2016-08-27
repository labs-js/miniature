import React from "react";
import {
    render
} from "react-dom";
import App from "./components/app/app";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

import {
    Provider
} from "react-redux";
import store from "./store";

render( 
    <App />,
    document.getElementById("app")
);
