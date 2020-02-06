import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import $ from "jquery";
import { fetchUser } from "actions";

class LoginForm extends Component {
  state = {
    loginError: ""
  };

  async onFormSubmit(fields) {
    try {
      const res = await axios.post("/auth/local", fields);

      this.hideLoginModal();

      console.log("1");
      console.log(res.data.message);
      console.log(res.data);
      this.setState({ loginError: res.data.message });
      if (res.data.success) {
        this.props.fetchUser();
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
      }
    } catch (error) {
      console.log("2");
      if (error.response && error.response.data) {
        console.log(error.response.data);
        this.setState({ loginError: error.response.data.message });
      }
      this.hideLoginModal();
      this.props.history.push("/login");
    }
  }

  hideLoginModal() {
    $("#loginModal").modal("hide");
  }

  render() {
    if (this.props.auth) {
      return <p>You are already logged in</p>;
    }
    return (
      <>
        <Formik
          className="col"
          initialValues={{ emailOrUsername: "", password: "" }}
          validationSchema={Yup.object().shape({
            emailOrUsername: Yup.string().required(
              "Email or username is required"
            ),
            password: Yup.string().required("password is required")
          })}
          onSubmit={async (fields, { setSubmitting }) => {
            await this.onFormSubmit(fields);

            setTimeout(() => {
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({ errors, status, touched, isSubmitting }) => (
            <Form className="d-block mx-auto px-2">
              <span className="text-danger">{this.state.loginError}</span>
              <div className="form-row">
                <div className="form-group col" key="title">
                  <label htmlFor="emailOrUsername">Email or username</label>
                  <Field
                    name="emailOrUsername"
                    type="text"
                    className={
                      "form-control" +
                      (errors.emailOrUsername && touched.emailOrUsername
                        ? " is-invalid"
                        : "")
                    }
                    placeholder="Email or username"
                  />
                  <ErrorMessage
                    name="emailOrUsername"
                    className="invalid-feedback"
                    render={msg => <div className="text-danger">{msg}</div>}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col" key="password">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    className="invalid-feedback"
                    render={msg => <div className="text-danger">{msg}</div>}
                  />
                </div>
              </div>

              <div className="text-right" key="buttons">
                <button
                  className="btn btn-primary"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(withRouter(LoginForm));
