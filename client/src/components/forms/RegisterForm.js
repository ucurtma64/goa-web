import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

class RegisterForm extends Component {
  state = {
    registerError: ""
  };

  async onFormSubmit(fields) {
    try {
      const res = await axios.post("/auth/local/register", fields);

      this.hideRegisterModal();

      console.log("1");
      console.log(res.data.message);
      console.log(res.data);
      this.setState({ registerError: res.data.message });
      if (res.data.success) {
        window.location.href = "/";
      } else {
        this.props.history.push("/register");
      }
    } catch (error) {
      console.log("2");

      if (error.response && error.response.data) {
        console.log(error.response.data);
        this.setState({ registerError: error.response.data.message });
      }

      this.hideRegisterModal();
      this.props.history.push("/register");
    }
  }

  hideRegisterModal() {
    $("#registerModal").modal("hide");
  }

  equalTo(ref, msg) {
    return Yup.mixed().test({
      name: "equalTo",
      exclusive: false,
      message: msg,
      params: {
        reference: ref.path
      },
      test: function(value) {
        return value === this.resolve(ref);
      }
    });
  }

  render() {
    if (this.props.auth) {
      return <p>You are already logged in</p>;
    }

    Yup.addMethod(Yup.string, "equalTo", this.equalTo);

    return (
      <>
        <Formik
          className="col"
          initialValues={{
            email: "",
            username: "",
            password: "",
            passwordConfirm: ""
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .matches(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Email must be a valid email"
              )
              .required("Email is required"),
            username: Yup.string()
              .min(4)
              .max(16)
              .matches(
                /^[a-zA-Z0-9]+$/,
                "Username can't contain special characters"
              )
              .required("Username is required"),
            password: Yup.string()
              .min(6)
              .max(16)
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                "Password must contain at least one letter and one number"
              )
              .required("Password is required"),
            passwordConfirm: Yup.string()
              .equalTo(Yup.ref("password"), "Passwords must match")
              .required("Required")
          })}
          onSubmit={async (fields, { setSubmitting }) => {
            await this.onFormSubmit(fields);

            setTimeout(() => {
              setSubmitting(false);
            }, 2000);
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form className="d-block mx-auto px-2">
              <span className="text-danger">{this.state.registerError}</span>
              <div className="form-row">
                <div className="form-group col" key="email">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    className="invalid-feedback"
                    render={msg => <div className="text-danger">{msg}</div>}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col" key="username">
                  <label htmlFor="username">Username</label>
                  <Field
                    name="username"
                    type="text"
                    className={
                      "form-control" +
                      (errors.username && touched.username ? " is-invalid" : "")
                    }
                    placeholder="Username"
                  />
                  <ErrorMessage
                    name="username"
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

                <div className="form-group col" key="passwordConfirm">
                  <label htmlFor="passwordConfirm">Repeat password</label>
                  <Field
                    name="passwordConfirm"
                    type="password"
                    className={
                      "form-control" +
                      (errors.passwordConfirm && touched.passwordConfirm
                        ? " is-invalid"
                        : "")
                    }
                    placeholder="Repeat password"
                  />
                  <ErrorMessage
                    name="passwordConfirm"
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
                  Register
                </button>
              </div>
            </Form>
          )}
        />
        <hr />
        <a className="col-2 nav-link login-google" href="/auth/google">
          <FontAwesomeIcon className="mr-2" icon={faGoogle} />
          Login with google
        </a>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(withRouter(RegisterForm));
