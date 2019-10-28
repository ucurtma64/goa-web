import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class MinecraftForm extends Component {
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
        minecraftUsername:
          this.props.formValues.minecraftUsername ||
          this.props.auth.minecraftUsername
      };
    } else {
      initialValuesMap = {
        minecraftUsername: this.props.auth.minecraftUsername
      };
    }

    return (
      <div className="container">
        <div className="row">
          <Formik
            className="col-6"
            initialValues={initialValuesMap}
            validationSchema={Yup.object().shape({
              minecraftUsername: Yup.string()
                .matches(
                  /^\w{3,16}$/,
                  "3-16 characters, no spaces, The only allowed special character is _(underscore)"
                )
                .required("Minecraft Username is required")
            })}
            onSubmit={fields => {
              this.props.onFormSubmit(fields);
            }}
            render={({ errors, status, touched }) => (
              <Form className="d-block mx-auto px-2">
                <div className="form-group" key="minecraftUsername">
                  <label className="text-dark" htmlFor="minecraftUsername">
                    Minecraft Username
                  </label>
                  <Field
                    name="minecraftUsername"
                    type="text"
                    className={
                      "form-control" +
                      (errors.minecraftUsername && touched.minecraftUsername
                        ? " is-invalid"
                        : "")
                    }
                    placeholder="Your ingame username"
                  />
                  <ErrorMessage
                    name="minecraftUsername"
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

export default connect(mapStateToProps)(withRouter(MinecraftForm));
