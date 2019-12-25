import React, { Component } from "react";
import ProductsRanks from "./products/ProductsRanks";
import ProductsSkins from "./products/ProductsSkins";
import ProductsChests from "./products/ProductsChests";
import ProductsBoosts from "./products/ProductsBoosts";

class ProductSelection extends Component {
  render() {
    return (
      <section className="container py-5">
        <nav>
          <div class="nav nav-tabs" id="nav-tab-shop" role="tablist">
            <a
              class="nav-item nav-link active mx-auto"
              id="nav-ranks-tab"
              data-toggle="tab"
              href="#nav-ranks"
              role="tab"
              aria-controls="nav-ranks"
              aria-selected="true"
            >
              Ranks
            </a>
            <a
              class="nav-item nav-link mx-auto"
              id="nav-skins-tab"
              data-toggle="tab"
              href="#nav-skins"
              role="tab"
              aria-controls="nav-skins"
              aria-selected="false"
            >
              Skins
            </a>
            <a
              class="nav-item nav-link mx-auto"
              id="nav-chests-tab"
              data-toggle="tab"
              href="#nav-chests"
              role="tab"
              aria-controls="nav-chests"
              aria-selected="false"
            >
              Chests
            </a>
            <a
              class="nav-item nav-link mx-auto"
              id="nav-boosts-tab"
              data-toggle="tab"
              href="#nav-boosts"
              role="tab"
              aria-controls="nav-boosts"
              aria-selected="false"
            >
              Boosts
            </a>
          </div>
        </nav>
        <div class="tab-content mt-4" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-ranks"
            role="tabpanel"
            aria-labelledby="nav-ranks-tab"
          >
            <ProductsRanks />
          </div>
          <div
            class="tab-pane fade"
            id="nav-skins"
            role="tabpanel"
            aria-labelledby="nav-skins-tab"
          >
            <ProductsSkins />
          </div>
          <div
            class="tab-pane fade"
            id="nav-chests"
            role="tabpanel"
            aria-labelledby="nav-chests-tab"
          >
            <ProductsChests />
          </div>
          <div
            class="tab-pane fade"
            id="nav-boosts"
            role="tabpanel"
            aria-labelledby="nav-boosts-tab"
          >
            <ProductsBoosts />
          </div>
        </div>
      </section>
    );
  }
}

export default ProductSelection;
