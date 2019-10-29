import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

class ProductConfirmation extends Component {
  async onConfirmation(formValues) {
    console.log(formValues);

    await axios.post("/api/products", formValues);
  }

  render() {
    if (!this.props.auth) {
      return (
        <div className="container mw-100">
          <div className="row">
            <p className="mx-auto" role="status">
              You must be logged in to complete purchase.
            </p>
          </div>
          <div className="row">
            <Link className="mx-auto" to="/auth/google">
              <FontAwesomeIcon className="mr-2" icon={faGoogle} />
              Login with google
            </Link>
          </div>
        </div>
      );
    }

    return (
      <section className="py-5">
        <div className="container mw-100">
          <div className="row">
            <ProductCard product={this.props.formValues.productSelection} />
          </div>
          <div className="row">
            <div className="col-lg-4 mx-auto" style={{ marginBottom: "1rem" }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center mt-2">
                    Minecraft Username:
                  </h5>
                  <p className="text-center mt-n2">
                    {this.props.formValues.minecraftUsername}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <button
            className="btn btn-secondary btn-lg"
            type="button"
            variant="secondary"
            onClick={() => this.props.onCancel()}
          >
            Back
          </button>
          <button
            className="btn btn-primary float-right btn-lg"
            type="submit"
            onClick={() => this.onConfirmation(this.props.formValues)}
          >
            Confirm!
          </button>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withRouter(ProductConfirmation));
