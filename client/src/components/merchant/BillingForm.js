import _ from "lodash";
import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class BillingForm extends Component {
  render() {
    const initialValuesMap = {
      identityNumber: this.props.formValues.identityNumber || "74300864791",
      registrationAddress:
        this.props.formValues.registrationAddress ||
        "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
      city: this.props.formValues.city || "Istanbul",
      country: this.props.formValues.country || "Turkey"
    };

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
              this.props.onSurveySubmit(fields);
            }}
            render={({ errors, status, touched }) => (
              <Form className="d-block mx-auto">
                <div className="form-group" key="identityNumber">
                  <label className="text-light" htmlFor="identityNumber">
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
                  <label className="text-light" htmlFor="registrationAddress">
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
                    <label className="text-light" htmlFor="city">
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
                    <label className="text-light" htmlFor="country">
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

                <div
                  className="form-group "
                  key="buttons"
                  style={{ margin: "2rem" }}
                >
                  <button
                    className="btn btn-primary float-right"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: "2rem" }}
                    variant="secondary"
                    type="reset"
                  >
                    Reset
                  </button>
                  <button
                    className="btn btn-secondary float-left"
                    variant="secondary"
                    onClick={this.props.onCancel}
                  >
                    Back
                  </button>
                </div>
              </Form>
            )}
          />

          <div className="pricing" style={{ margin: "1rem" }}>
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  {this.props.formValues.product.label}
                </h5>
                <h6 className="card-price text-center">
                  ${this.props.formValues.product.price}
                  <span className="period">/credits</span>
                </h6>
                <hr />

                {this.props.formValues.product.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BillingForm;
