import React from "react";

require('./Content.scss');


class Content extends React.Component {

    render() {
        return (
            <div className="content">
                <h3> This is the content </h3>
            </div>
        );
    }
}

export default Content;