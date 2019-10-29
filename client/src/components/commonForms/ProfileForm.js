import React, { Component } from "react";
import Spinner from "../util/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class ProfileForm extends Component {
  getInitialValues() {
    var initialValuesMap = {
      givenName: "",
      familyName: "",
      email: ""
    };

    if (this.props.formValues && this.props.auth) {
      initialValuesMap = {
        givenName:
          this.props.formValues.givenName || this.props.auth.givenName || "",
        familyName:
          this.props.formValues.familyName || this.props.auth.familyName || "",
        email: this.props.formValues.email || this.props.auth.email || ""
      };
    } else {
      initialValuesMap = {
        givenName: this.props.auth.givenName || "",
        familyName: this.props.auth.familyName || "",
        email: this.props.auth.email || ""
      };
    }

    return initialValuesMap;
  }

  renderBackButton() {
    if (this.props.onCancel) {
      return (
        <button
          className="btn btn-secondary"
          variant="secondary"
          onClick={this.props.onCancel}
        >
          Back
        </button>
      );
    }
  }

  render() {
    if (!this.props.auth) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <div className="row">
          <Formik
            className="col-6"
            initialValues={this.getInitialValues()}
            validationSchema={Yup.object().shape({
              givenName: Yup.string()
                .min(2, "min 2 characters")
                .max(25, "max 25 characters")
                .required("Name is required"),
              familyName: Yup.string()
                .min(2, "min 2 characters")
                .max(25, "max 25 characters")
                .required("Surname is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required")
            })}
            onSubmit={fields => {
              this.props.onFormSubmit(fields);
            }}
            render={({ errors, status, touched }) => (
              <Form className="d-block mx-auto px-2">
                <div className="form-row">
                  <div className="form-group col" key="givenName">
                    <label className="text-dark" htmlFor="givenName">
                      Name
                    </label>
                    <Field
                      name="givenName"
                      type="text"
                      className={
                        "form-control" +
                        (errors.givenName && touched.givenName
                          ? " is-invalid"
                          : "")
                      }
                      placeholder="Given Name"
                    />
                    <ErrorMessage
                      name="givenName"
                      className="invalid-feedback"
                      render={msg => <div className="text-danger">{msg}</div>}
                    />
                  </div>

                  <div className="form-group col" key="familyName">
                    <label className="text-dark" htmlFor="familyName">
                      Surname
                    </label>
                    <Field
                      name="familyName"
                      type="text"
                      className={
                        "form-control" +
                        (errors.familyName && touched.familyName
                          ? " is-invalid"
                          : "")
                      }
                      placeholder="Family Name"
                    />
                    <ErrorMessage
                      name="familyName"
                      className="invalid-feedback"
                      render={msg => <div className="text-danger">{msg}</div>}
                    />
                  </div>
                </div>

                <div className="form-group" key="email">
                  <label className="text-dark" htmlFor="email">
                    Email
                  </label>
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

                <div className="form-group " key="buttons">
                  {this.renderBackButton()}

                  <button
                    className="btn btn-primary float-right"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withRouter(ProfileForm));
