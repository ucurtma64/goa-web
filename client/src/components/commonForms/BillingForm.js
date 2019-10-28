import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class BillingForm extends Component {
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
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    var initialValuesMap;

    if (this.props.formValues) {
      initialValuesMap = {
        identityNumber:
          this.props.formValues.identityNumber ||
          this.props.auth.billing.identityNumber,
        registrationAddress:
          this.props.formValues.registrationAddress ||
          this.props.auth.billing.registrationAddress,
        city: this.props.formValues.city || this.props.auth.billing.city,
        country:
          this.props.formValues.country || this.props.auth.billing.country
      };
    } else {
      initialValuesMap = {
        identityNumber: this.props.auth.billing.identityNumber,
        registrationAddress: this.props.auth.billing.registrationAddress,
        city: this.props.auth.billing.city,
        country: this.props.auth.billing.country
      };
    }

    return (
      <div className="container">
        <div className="row">
          <Formik
            className="col-6"
            initialValues={initialValuesMap}
            validationSchema={Yup.object().shape({
              identityNumber: Yup.string()
                .min(5, "Identity number must be at least 5 characters")
                .max(50, "Identity number must be at most 50 characters")
                .required("Identity number is required"),
              registrationAddress: Yup.string().required(
                "Registration Address is required"
              ),
              city: Yup.string().required("City is required"),
              country: Yup.string().required("City is required")
            })}
            onSubmit={fields => {
              this.props.onFormSubmit(fields);
            }}
            render={({ errors, status, touched }) => (
              <Form className="d-block mx-auto px-2">
                <div className="form-group" key="identityNumber">
                  <label className="text-dark" htmlFor="identityNumber">
                    Identity Number
                  </label>
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
                  <label className="text-dark" htmlFor="registrationAddress">
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
                    <label className="text-dark" htmlFor="city">
                      City
                    </label>
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
                    <label className="text-dark" htmlFor="country">
                      Country
                    </label>
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

export default connect(mapStateToProps)(withRouter(BillingForm));
