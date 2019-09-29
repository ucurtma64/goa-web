import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

class PaymentForm extends Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    const initialValuesMap = {
      cardHolderName: this.props.formValues.cardHolderName || "",
      cardNumber: this.props.formValues.cardNumber || "",
      expireYear: this.props.formValues.expireYear || "",
      expireMonth: this.props.formValues.expireMonth || "",
      cvc: this.props.formValues.cvc || ""
    };

    return (
      <>
        <style type="text/css">
          {`
                .pricing .card {
                border: none;
                border-radius: 1rem;
                transition: all 0.2s;
                box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
                }
                
                .pricing hr {
                margin: 1.5rem 0;
                }

                .pricing .card-title {
                margin: 0.5rem 0;
                font-size: 0.9rem;
                letter-spacing: .1rem;
                font-weight: bold;
                }
                
                .pricing .card-price {
                font-size: 3rem;
                margin: 0;
                }
                
                .pricing .card-price .period {
                font-size: 0.8rem;
                }
                
                .pricing ul li {
                margin-bottom: 1rem;
                }
                
                .pricing .text-muted {
                opacity: 0.7;
                }
                
                .pricing .btn {
                font-size: 80%;
                border-radius: 5rem;
                letter-spacing: .1rem;
                font-weight: bold;
                padding: 1rem;
                opacity: 0.7;
                transition: all 0.2s;
                }
                
                /* Hover Effects on Card */
                
                @media (min-width: 992px) {
                .pricing .card:hover {
                    margin-top: -.25rem;
                    margin-bottom: .25rem;
                    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
                }
                .pricing .card:hover .btn {
                    opacity: 1;
                }
                `}
        </style>

        <div className="container">
          <div className="row">
            <Formik
              className="col-6"
              initialValues={initialValuesMap}
              validationSchema={Yup.object().shape({
                cardHolderName: Yup.string()
                  .min(5, "cardHolderName must be at least 5 characters")
                  .max(50, "cardHolderName must be at most 50 characters")
                  .required("cardHolderName is required"),
                cardNumber: Yup.string().required("cardNumber is required"),
                expireYear: Yup.string().required("expireYear is required"),
                expireMonth: Yup.string().required("expireMonth is required"),
                cvc: Yup.string().required("required")
              })}
              onSubmit={fields => {
                const product = this.props.formValues.product;
                delete product.description;

                const buyer = {
                  id: this.props.auth._id,
                  name: this.props.auth.givenName,
                  surname: this.props.auth.familyName,
                  identityNumber: this.props.formValues.identityNumber,
                  email: this.props.auth.email,
                  registrationAddress: this.props.formValues
                    .registrationAddress,
                  city: this.props.formValues.city,
                  country: this.props.formValues.country
                };

                const paymentCard = Object.assign(fields, { registerCard: 0 });

                const token = Object.assign(
                  { product },
                  { buyer },
                  { paymentCard }
                );

                this.props.iyzipayStart3D(token);
              }}
              render={({ errors, status, touched }) => (
                <Form className="d-block mx-auto">
                  <div className="form-row">
                    <div className="form-group col" key="cardHolderName">
                      <label className="text-light" htmlFor="cardHolderName">
                        Name on card
                      </label>
                      <Field
                        name="cardHolderName"
                        type="text"
                        className={
                          "form-control" +
                          (errors.cardHolderName && touched.cardHolderName
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Name on card"
                      />
                      <ErrorMessage
                        name="cardHolderName"
                        className="invalid-feedback"
                        render={msg => <div className="text-danger">{msg}</div>}
                      />
                    </div>

                    <div className="form-group col-md-2" key="expireMonth">
                      <label className="text-light" htmlFor="expireMonth">
                        Month
                      </label>
                      <Field
                        name="expireMonth"
                        type="text"
                        className={
                          "form-control" +
                          (errors.expireMonth && touched.expireMonth
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="MM"
                      />
                      <ErrorMessage
                        name="expireMonth"
                        className="invalid-feedback"
                        render={msg => <div className="text-danger">{msg}</div>}
                      />
                    </div>

                    <div className="form-group col-md-2" key="expireYear">
                      <label className="text-light" htmlFor="expireYear">
                        Year
                      </label>
                      <Field
                        name="expireYear"
                        type="text"
                        className={
                          "form-control" +
                          (errors.expireYear && touched.expireYear
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="YY"
                      />
                      <ErrorMessage
                        name="expireYear"
                        className="invalid-feedback"
                        render={msg => <div className="text-danger">{msg}</div>}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col" key="cardNumber">
                      <label className="text-light" htmlFor="cardNumber">
                        Card number
                      </label>
                      <Field
                        name="cardNumber"
                        type="text"
                        className={
                          "form-control" +
                          (errors.cardNumber && touched.cardNumber
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Card number"
                      />
                      <ErrorMessage
                        name="cardNumber"
                        className="invalid-feedback"
                        render={msg => <div className="text-danger">{msg}</div>}
                      />
                    </div>
                    <div className="form-group col-md-2" key="cvc">
                      <label className="text-light" htmlFor="cvc">
                        Security
                      </label>
                      <div className="input-group">
                        <Field
                          name="cvc"
                          type="text"
                          className={
                            "form-control" +
                            (errors.cvc && touched.cvc ? " is-invalid" : "")
                          }
                          placeholder="cvc"
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Three-digits code on the back of your card"
                          >
                            <FontAwesomeIcon
                              size="xs"
                              mask={["fas"]}
                              icon={faQuestionCircle}
                            />
                          </span>
                        </div>
                        <ErrorMessage
                          name="cvc"
                          className="invalid-feedback"
                          render={msg => (
                            <div className="text-danger">{msg}</div>
                          )}
                        />
                      </div>
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
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(PaymentForm));
