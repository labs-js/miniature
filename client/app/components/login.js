import React from "react";

export default class Login extends React.Component {
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
      <button type="button" class="btn btn-default">Sign in</button>
      </div>
      </div>
    );
  }
}
