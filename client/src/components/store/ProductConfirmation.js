import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
import { notifyModal, buyProduct } from "../../actions";
import Spinner from "../util/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

class ProductConfirmation extends Component {
  async onConfirmation(formValues) {
    this.props.notifyModal(
      true,
      "secondary",
      <div>
        <Spinner />
        Please wait...
      </div>
    );

    delete formValues.productSelection.description;
    delete formValues.productSelection.image;
    delete formValues.productSelection.name;
    console.log(formValues);

    const res = await this.props.buyProduct(formValues);

    console.log(res);

    if (res.success) {
      this.props.notifyModal(true, "success", res.msg);
    } else {
      this.props.notifyModal(true, "danger", res.msg);
    }
  }

  showLoginModal() {
    $("#loginModal").modal("show");
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
            <button
              className="mt-4 btn mx-auto"
              href="#loginModal"
              onClick={this.showLoginModal}
            >
              <FontAwesomeIcon className="mr-2" icon={faSignInAlt} />
              Login
            </button>
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

export default connect(mapStateToProps, { notifyModal, buyProduct })(
  withRouter(ProductConfirmation)
);
