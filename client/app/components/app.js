import React from "react";

require("../styles/all.scss");

import NavBar from "./navbar";
import Login from "./login";
export default class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>miniature</h1>
                    <NavBar />
                <Login />
                </div>
            );
        }
}
