import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { notifyModal, fetchUser } from "../actions";

class LoginPage extends Component {
  async onFormSubmit(fields) {
    try {
      const res = await axios.post("/auth/local", fields);
      console.log(4);
      console.log(res.data);
      this.props.history.push("/");
    } catch (error) {
      this.props.history.push("/login");
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }

    this.props.fetchUser();
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
        onSubmit={fields => {
          this.onFormSubmit(fields);
        }}
        render={({ errors, status, touched }) => (
          <Form className="d-block mx-auto px-2">
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

export default connect(mapStateToProps, { notifyModal, fetchUser })(
  withRouter(LoginPage)
);
