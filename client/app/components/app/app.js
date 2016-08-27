import React from "react";

import NavBar from "../navbar";
import Login from "../login/login";
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
