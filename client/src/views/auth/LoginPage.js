import React, { Component } from "react";
import LoginForm from "components/forms/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
