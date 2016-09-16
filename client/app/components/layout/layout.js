import React from "react";
import Header from "./header/Header"
import Content from "./content/Content"
import Footer from "./footer/Footer"

require('./Layout.scss');


class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header />,
                <Content />,
            </div>
        );
    }
}

export default Layout;
