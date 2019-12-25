import React, { Component } from "react";
import ProductCard from "../ProductCard";
import hero from "assets/img/hero.png";
import legend from "assets/img/legend.png";
import titan from "assets/img/titan.png";

class ProductRanks extends Component {
  render() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "Hero Rank",
            description: "description",
            image: hero
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 2,
            credits: 2,
            name: "Legend Rank",
            description: "description",
            image: legend
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 3,
            credits: 5,
            name: "Titan Rank",
            description: "description",
            image: titan
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
      </div>
    );
  }
}

export default ProductRanks;
