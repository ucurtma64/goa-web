import React, { Component } from "react";
import { connect } from "react-redux";
import EmailForm from "components/forms/EmailForm";
import Spinner from "components/util/Spinner";

class VerifyPage extends Component {
  render() {
    if (!this.props.auth) {
      return (
        <div className="col mt-4">
          <Spinner className="mt-4" />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <div className="card">
              <div className="card-header">Verify</div>
              <div className="card-body">
                <p>{this.props.auth.email}</p>
                We sent you a very awesome email called "Activate your new GoA
                account" to the email address above. To activate your account,
                find that email in your inbox and click the button that says
                "Activate your account".
                <div className="mt-4 text-right">
                  <button className="btn btn-primary">
                    Resend Confirmation
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-4">
            <div className="card">
              <div className="card-header">Change Your Email</div>
              <div className="card-body">
                Not you? Wrong email? No problem, let’s just update it and
                everything will be fine.
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(VerifyPage);
