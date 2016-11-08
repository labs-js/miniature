import React from "react";
require('./Content.scss');
import Book from "../../books/bookTemplate";

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var axios = require('axios');
var accept = require('attr-accept');

var content = React.createClass({

    displayName: 'Dropzone',
    getDefaultProps() {
        return {
            disableClick: false,
            multiple: true
        };
    },

    getInitialState() {
        return {
            isDragActive: false,
            initialFiles: []
        };
    },
    componentWillMount:function(){
            //Here get all the files from the server
console.log("pase por aca y busco los archivos");

    },
    propTypes: {
        onDrop: React.PropTypes.func,
        onDropAccepted: React.PropTypes.func,
        onDropRejected: React.PropTypes.func,
        onDragEnter: React.PropTypes.func,
        onDragLeave: React.PropTypes.func,

        style: React.PropTypes.object,
        activeStyle: React.PropTypes.object,
        className: React.PropTypes.string,
        activeClassName: React.PropTypes.string,
        rejectClassName: React.PropTypes.string,

        disableClick: React.PropTypes.bool,
        multiple: React.PropTypes.bool,
        accept: React.PropTypes.string,
    },

    onDragEnter(e) {
        e.preventDefault();

        // Count the dropzone and any children that are entered.
        ++this.enterCounter;

        // This is tricky. During the drag even the dataTransfer.files is null
        // But Chrome implements some drag store, which is accesible via dataTransfer.items
        var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

        // Now we need to convert the DataTransferList to Array
        var itemsArray = Array.prototype.slice.call(dataTransferItems);
        var allFilesAccepted = this.allFilesAccepted(itemsArray);

        this.setState({
            isDragActive: allFilesAccepted,
            isDragReject: !allFilesAccepted
        });

        if (this.props.onDragEnter) {
            this.props.onDragEnter(e);
        }
    },

    onDragOver(e) {
        e.preventDefault();
    },

    onDragLeave(e) {
        e.preventDefault();

        // Only deactivate once the dropzone and all children was left.
        if (--this.enterCounter > 0) {
            return;
        }

        this.setState({
            isDragActive: false,
            isDragReject: false
        });

        if (this.props.onDragLeave) {
            this.props.onDragLeave(e);
        }
    },
    open() {
        var fileInput = React.findDOMNode(this.refs.fileInput);
        fileInput.value = null;
        fileInput.click();
    },
    onClick() {
        if (!this.props.disableClick) {
            this.open();
        }
    },
    onDrop(e) {
        e.preventDefault(e);
        var data = new FormData();
        data.append("file", files[0], files[0].name);

        // TODO set parameters in config file
        axios.post("http://localhost:4000/api/books", data).
        then((res) => {
                //TODO: ADD POPUP to handle messages
                console.log("UPLOADED!!");
            })
            .catch((err) => {
                console.log(err);
            });
    },
    render() {
        return React.createElement(
            'div', {
                className: "dropzone",
                // style: 
                onClick: this.onClick,
                onDragEnter: this.onDragEnter,
                onDragOver: this.onDragOver,
                onDragLeave: this.onDragLeave,
                onDrop: this.onDrop
            },
            this.props.children
        );
        // return (
        // <div className="content">
        // <div className='Dropzone' onClick={this.onClick} onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} dropzone={this.onDrop}>
        // {this.props.children}
        // <input type='file' ref='fileInput' style={{ display: 'none' }} multiple={this.props.multiple} accept={this.props.accept} onChange={this.onDrop} />
        // </div>
        // </div>
        // );
    }
})

module.exports = content;
