import React, { Component } from "react";
import ProductCard from "../ProductCard";
import chestGold from "assets/img/chest-gold.png";

class ProductsChests extends Component {
  render() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "1x Skin Chest",
            description:
              "Skin Chests are chests you can open in game for a chance to get a random cosmetic object!",
            image: chestGold,
            imageSmall: true
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "2x Skin Chest",
            description:
              "Skin Chests are chests you can open in game for a chance to get a random cosmetic object!",
            image: chestGold,
            imageSmall: true
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "5x Skin Chest",
            description:
              "Skin Chests are chests you can open in game for a chance to get a random cosmetic object!",
            image: chestGold,
            imageSmall: true
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
      </div>
    );
  }
}

export default ProductsChests;