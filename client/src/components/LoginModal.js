import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { notifyModal, fetchUser } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import LoginForm from "components/forms/LoginForm";

class LoginModal extends Component {
  render() {
    return (
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body pb-5">
              <LoginForm></LoginForm>
            </div>
            <div class="modal-footer">
              <a className="nav-link login-google" href="/auth/google">
                <FontAwesomeIcon className="mr-2" icon={faGoogle} />
                Login with google
              </a>
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

export default connect(mapStateToProps, { notifyModal, fetchUser })(
  withRouter(LoginModal)
);
