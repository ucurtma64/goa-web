import React, { Component } from "react";
import ProductCard from "../ProductCard";
import boostExp from "assets/img/boost-exp.png";
import boostLoot from "assets/img/boost-loot.png";
import boostEnchant from "assets/img/boost-enchant.png";
import boostGather from "assets/img/boost-gather.png";

class ProductsBoosts extends Component {
  render() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "Combat-EXP Boost",
            description:
              "2x exp gained from slaying monsters for 20 minutes on the whole server.",
            image: boostExp,
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
            name: "Item-Drop-Rate Boost",
            description:
              "1.5x chance of monsters droping item when they die for 20 minutes on the whole server.",
            image: boostLoot,
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
            name: "Enchant-Rate Boost",
            description:
              "Increases success rate of item enchanting by 15% for 20 minutes on the whole server.",
            image: boostEnchant,
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
            name: "Gathering Boost",
            description:
              "2x gathering speed for 20 minutes on the whole server.",
            image: boostGather,
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

export default ProductsBoosts;
