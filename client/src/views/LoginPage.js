import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "components/forms/LoginForm";

class LoginPage extends Component {
  render() {
    return <LoginForm></LoginForm>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(LoginPage);
