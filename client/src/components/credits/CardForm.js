import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import axios from "axios";
import CreditSelectionCard from "./CreditSelectionCard";

class CardForm extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    const initialValuesMap = {
      cardHolderName: this.props.formValues.cardHolderName || "",
      cardNumber: this.props.formValues.cardNumber || "",
      expireYear: this.props.formValues.expireYear || "",
      expireMonth: this.props.formValues.expireMonth || "",
      cvc: this.props.formValues.cvc || ""
    };

    this.state = { iyzipayHtml: "", initialValuesMap: initialValuesMap };
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  onFormSubmit(fields) {
    const product = this.props.formValues.creditSelection;

    const buyer = {
      id: this.props.auth._id,
      name: this.props.formValues.givenName,
      surname: this.props.formValues.familyName,
      identityNumber: this.props.formValues.identityNumber,
      email: this.props.formValues.email,
      registrationAddress: this.props.formValues.registrationAddress,
      city: this.props.formValues.city,
      country: this.props.formValues.country
    };

    const paymentCard = Object.assign(fields, { registerCard: 0 });

    const token = Object.assign({ product }, { buyer }, { paymentCard });

    this.startIyzipay3D(token);
  }

  async startIyzipay3D(token) {
    const res = await axios.post("/api/iyzipay", token);

    const iyzipayHtml = res.data;

    this.setState({ iyzipayHtml });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Formik
            className="col-6"
            initialValues={this.state.initialValuesMap}
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
              this.onFormSubmit(fields);
            }}
            render={({ errors, status, touched }) => (
              <Form className="d-block mx-auto px-2">
                <div className="form-row">
                  <div className="form-group col" key="cardHolderName">
                    <label className="text-dark" htmlFor="cardHolderName">
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
                    <label className="text-dark" htmlFor="expireMonth">
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
                    <label className="text-dark" htmlFor="expireYear">
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
                    <label className="text-dark" htmlFor="cardNumber">
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
                    <label className="text-dark" htmlFor="cvc">
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
                        render={msg => <div className="text-danger">{msg}</div>}
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
                    data-toggle="modal"
                    data-target="#paymentModal"
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

          <CreditSelectionCard
            creditSelection={{
              productId: this.props.formValues.creditSelection.productId,
              price: this.props.formValues.creditSelection.price,
              name: this.props.formValues.creditSelection.name,
              description: this.props.formValues.creditSelection.description,
              category: this.props.formValues.creditSelection.category
            }}
          />
        </div>

        <div
          className="modal fade"
          id="paymentModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="paymentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-body embed-responsive embed-responsive-16by9">
                <iframe
                  title="paymentFrame"
                  className="embed-responsive-item"
                  src={"data:text/html;charset=utf-8," + this.state.iyzipayHtml}
                />
              </div>
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

export default connect(mapStateToProps)(withRouter(CardForm));
