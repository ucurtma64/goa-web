import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductSelection extends Component {
  renderproductSelections() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "Super Pickaxe",
            description: "lapis lapis ohh lapis",
            image:
              "https://i.postimg.cc/SxvFph0s/Optimized-2019-08-22-02-50-29.jpg"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 2,
            credits: 2,
            name: "Super Pickaxe",
            description: "lapis lapis ohh lapis",
            image:
              "https://i.postimg.cc/SxvFph0s/Optimized-2019-08-22-02-50-29.jpg"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 3,
            credits: 5,
            name: "Super Pickaxe",
            description: "lapis lapis ohh lapis",
            image:
              "https://i.postimg.cc/SxvFph0s/Optimized-2019-08-22-02-50-29.jpg"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 4,
            credits: 10,
            name: "Super Pickaxe",
            description: "lapis lapis ohh lapis",
            image:
              "https://i.postimg.cc/SxvFph0s/Optimized-2019-08-22-02-50-29.jpg"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 5,
            credits: 15,
            name: "Super Pickaxe",
            description: "lapis lapis ohh lapis",
            image:
              "https://i.postimg.cc/SxvFph0s/Optimized-2019-08-22-02-50-29.jpg"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 6,
            credits: 20,
            name: "Super Pickaxe",
            description: "lapis lapis ohh lapis",
            image:
              "https://i.postimg.cc/SxvFph0s/Optimized-2019-08-22-02-50-29.jpg"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
      </div>
    );
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">{this.renderproductSelections()}</div>
        <div className="container">
          <button
            className="btn btn-secondary mx-auto btn-lg"
            type="button"
            variant="secondary"
            onClick={() => this.props.onCancel()}
          >
            Back
          </button>
        </div>
      </section>
    );
  }
}

export default ProductSelection;
