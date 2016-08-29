import React from "react";
import Layout from "../layout/Layout";

require('./App.scss');

class App extends React.Component {
        render() {
            return (
                <div className="app">
                    <Layout />
                </div>
            );
        }
}

export default App;