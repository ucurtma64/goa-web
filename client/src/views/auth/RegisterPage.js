import React, { Component } from "react";
import RegisterForm from "components/forms/RegisterForm";

class RegisterPage extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">Register</div>
          <div className="card-body">
            <RegisterForm />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
