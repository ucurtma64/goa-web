import _ from "lodash";
import React, { Component } from "react";
import products from "./products";

class Store extends Component {
  renderProducts() {
    return _.map(products, product => {
      return (
        <div
          className="col-lg-4"
          key={product.name}
          style={{ marginBottom: "1rem" }}
        >
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">
                {product.label}
              </h5>
              <h6 className="card-price text-center">
                ${product.price}
                <span className="period">/credits</span>
              </h6>
              <hr />

              {product.description}

              <button
                className="btn btn-block btn-primary text-uppercase"
                onClick={() => this.props.onSurveySubmit(product)}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row card-deck">{this.renderProducts()}</div>
        </div>
      </section>
    );
  }
}

export default Store;
