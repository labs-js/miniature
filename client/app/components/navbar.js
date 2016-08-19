import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"> </a>
                    <button type="button" className="btn btn-default navbar-btn">Sign in</button>
                </div>
              </div>
            </nav>
        </div>
        );
    }
}
