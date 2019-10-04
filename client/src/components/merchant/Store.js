import _ from "lodash";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Store extends Component {
  async componentDidMount() {
    await this.props.fetchProducts(); //wait for async method to complete so this.props.surveys at next lines is not null
  }

  renderProducts() {
    return _.map(this.props.products, product => {
      const descriptionList = product.description.map(line => (
        <li key={line}>
          <span className="fa-li">
            <FontAwesomeIcon mask={["fas"]} icon={faCheck} />
          </span>
          {line}
        </li>
      ));

      return (
        <div
          className="col-lg-4"
          key={product.name}
          style={{ marginBottom: "1rem" }}
        >
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">
                {product.name}
              </h5>
              <h6 className="card-price text-center">
                ${product.price}
                <span className="period">/credits</span>
              </h6>
              <hr />

              <ul className="fa-ul">{descriptionList}</ul>

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

function mapStateToProps({ products }) {
  return { products };
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Store);
