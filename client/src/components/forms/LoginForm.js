import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { fetchUser } from "actions";
import $ from "jquery";

class LoginPage extends Component {
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
      console.log(error.response.data);
      this.setState({ loginError: error.response.data.message });
      this.hideLoginModal();

      this.props.history.push("/login");
    }
  }

  hideLoginModal() {
    $("#loginModal").modal("hide");
  }

  render() {
    return (
      <Formik
        className="col"
        initialValues={{}}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("username is required"),
          password: Yup.string().required("password is required")
        })}
        onSubmit={async (fields, { setSubmitting }) => {
          await this.onFormSubmit(fields);

          setSubmitting(false);
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form className="d-block mx-auto px-2">
            <span className="text-danger">{this.state.loginError}</span>
            <div className="form-row">
              <div className="form-group col" key="title">
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
            </div>

            <div className="form-group " key="buttons">
              <button
                className="btn btn-primary float-right"
                variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(withRouter(LoginPage));
