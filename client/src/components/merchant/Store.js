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
        <section className="pricing py-5">
          <div className="container">
            <div className="row card-deck">{this.renderProducts()}</div>
          </div>
        </section>
      </>
    );
  }
}

export default Store;
