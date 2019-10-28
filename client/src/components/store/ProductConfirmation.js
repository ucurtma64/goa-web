import React, { Component } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

class ProductConfirmation extends Component {
  async onConfirmation(formValues) {
    console.log(formValues);

    await axios.post("/api/products", formValues);
  }

  render() {
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

export default ProductConfirmation;
