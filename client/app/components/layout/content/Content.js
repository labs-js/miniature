import React from "react";
require('./Content.scss');
import Book from "../../books/bookTemplate";
var Dropzone = require('react-dropzone');
var axios = require('axios');

export default class Content extends React.Component {
    onDrop(files) {

        var data = new FormData();
        data.append("file",files[0], files[0].name);

        // TODO set parameters in config file
        axios.post("http://localhost:4000/api/books", data).
        then((res) => {
                //TODO: ADD POPUP to handle messages
                console.log("UPLOADED!!");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    success() {
        debugger;
    }

    render() {
        return (
            <div>
            <Dropzone onDrop={this.onDrop} >
              <div className="dropzone">Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
        );
    }
}
