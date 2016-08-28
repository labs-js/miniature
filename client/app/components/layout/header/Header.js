import React from "react";

require('./Header.scss');


class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <h3> This is the header </h3>
            </div>
        );
    }
}

export default Header;