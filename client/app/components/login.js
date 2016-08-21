import React from "react";
var t;
export default class Login extends React.Component {

    signIn() {
        // call sign in service and back in state
        console.log("entro!");
        console.log(arguments[2]);
        t = arguments;
    }

    render() {
        return (
            <div className="panel panel-primary login">
      <div className="panel-heading">
          <h3 className="panel-title">Login</h3>
      </div>
      <div className="panel-body">
      <div className="input-group">
      <span className="input-group-addon" id="basic-addon1"></span>
      <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
      <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
      </div>
      <button type="button" className="btn btn-default" onClick={this.signIn}>Sign in</button>
      </div>
      </div>
        );
    }
}
