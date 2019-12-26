import React, { Component } from "react";
import Spinner from "../util/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class BillingForm extends Component {
  getInitialValues() {
    var initialValuesMap = {
      identityNumber: "",
      registrationAddress: "",
      city: "",
      country: ""
    };

    if (this.props.formValues && this.props.auth.billing) {
      initialValuesMap = {
        identityNumber:
          this.props.formValues.identityNumber ||
          this.props.auth.billing.identityNumber ||
          "",
        registrationAddress:
          this.props.formValues.registrationAddress ||
          this.props.auth.billing.registrationAddress ||
          "",
        city: this.props.formValues.city || this.props.auth.billing.city || "",
        country:
          this.props.formValues.country || this.props.auth.billing.country || ""
      };
    } else if (this.props.formValues) {
      initialValuesMap = {
        identityNumber: this.props.formValues.identityNumber || "",
        registrationAddress: this.props.formValues.registrationAddress || "",
        city: this.props.formValues.city || "",
        country: this.props.formValues.country || ""
      };
    } else if (this.props.auth.billing) {
      initialValuesMap = {
        identityNumber: this.props.auth.billing.identityNumber || "",
        registrationAddress: this.props.auth.billing.registrationAddress || "",
        city: this.props.auth.billing.city || "",
        country: this.props.auth.billing.country || ""
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
              identityNumber: Yup.string()
                .min(5, "Identity number must be at least 5 characters")
                .max(50, "Identity number must be at most 50 characters")
                .required("Identity number is required"),
              registrationAddress: Yup.string()
                .min(5, "min 5 characters")
                .max(120, "max 120 characters")
                .required("Registration Address is required"),
              city: Yup.string()
                .min(2, "min 2 characters")
                .max(25, "max 25 characters")
                .required("City is required"),
              country: Yup.string()
                .min(2, "min 2 characters")
                .max(25, "max 25 characters")
                .required("City is required")
            })}
            onSubmit={fields => {
              this.props.onFormSubmit(fields);
            }}
            render={({ errors, status, touched }) => (
              <Form className="d-block mx-auto px-2">
                <div className="form-group" key="identityNumber">
                  <label htmlFor="identityNumber">Identity Number</label>
                  <Field
                    name="identityNumber"
                    type="text"
                    className={
                      "form-control" +
                      (errors.identityNumber && touched.identityNumber
                        ? " is-invalid"
                        : "")
                    }
                    placeholder="Identity Number"
                  />
                  <ErrorMessage
                    name="identityNumber"
                    className="invalid-feedback"
                    render={msg => <div className="text-danger">{msg}</div>}
                  />
                </div>

                <div className="form-group" key="registrationAddress">
                  <label htmlFor="registrationAddress">
                    Registration Address
                  </label>
                  <Field
                    rows="1"
                    component="textarea"
                    name="registrationAddress"
                    type="text"
                    className={
                      "form-control" +
                      (errors.registrationAddress && touched.registrationAddress
                        ? " is-invalid"
                        : "")
                    }
                    placeholder="Registration Address"
                  />
                  <ErrorMessage
                    name="registrationAddress"
                    className="invalid-feedback"
                    render={msg => <div className="text-danger">{msg}</div>}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col" key="city">
                    <label htmlFor="city">City</label>
                    <Field
                      name="city"
                      type="text"
                      className={
                        "form-control" +
                        (errors.city && touched.city ? " is-invalid" : "")
                      }
                      placeholder="City"
                    />
                    <ErrorMessage
                      name="city"
                      className="invalid-feedback"
                      render={msg => <div className="text-danger">{msg}</div>}
                    />
                  </div>

                  <div className="form-group col" key="country">
                    <label htmlFor="country">Country</label>
                    <Field
                      name="country"
                      type="text"
                      className={
                        "form-control" +
                        (errors.country && touched.country ? " is-invalid" : "")
                      }
                      placeholder="Country"
                    />
                    <ErrorMessage
                      name="country"
                      className="invalid-feedback"
                      render={msg => <div className="text-danger">{msg}</div>}
                    />
                  </div>
                </div>

                <div className="" key="buttons">
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

export default connect(mapStateToProps)(withRouter(BillingForm));
