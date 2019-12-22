import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductSelection extends Component {
  renderRanks() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "Hero Rank",
            description: "description",
            image: "https://i.ibb.co/jfsgtbY/Crystals3.png",
            imageSmall: true
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 2,
            credits: 2,
            name: "Titan Rank",
            description: "description",
            image: "https://i.ibb.co/cywR15R/Crystals2.png",
            imageSmall: true
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 3,
            credits: 5,
            name: "Legend Rank",
            description: "description",
            image: "https://i.ibb.co/jwF9pQR/Crystals1.png",
            imageSmall: true
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
      </div>
    );
  }

  renderPets() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 1,
            credits: 1,
            name: "Bee",
            description: "description",
            image: "https://i.ibb.co/DRFSv47/bee.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 2,
            credits: 2,
            name: "Red Fox",
            description: "description",
            image: "https://i.ibb.co/LtdZm9J/fox-red.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 3,
            credits: 5,
            name: "Snow Fox",
            description: "description",
            image: "https://i.ibb.co/CQq5xny/fox-snow.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 4,
            credits: 10,
            name: "Ice Cream",
            description: "description",
            image: "https://i.ibb.co/hdVTH08/icecream.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 5,
            credits: 15,
            name: "Vex",
            description: "description",
            image: "https://i.ibb.co/Jks4Cqq/vex.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 6,
            credits: 20,
            name: "Mini-dragon",
            description: "description",
            image: "https://i.ibb.co/hygWC4R/mini-dragon.png"
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
      <section className="container py-5">
        <nav>
          <div class="nav nav-tabs" id="nav-tab-shop" role="tablist">
            <a
              class="nav-item nav-link active mx-auto"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Ranks
            </a>
            <a
              class="nav-item nav-link mx-auto"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Pet Skins
            </a>
            <a
              class="nav-item nav-link mx-auto"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Helmet Skins
            </a>
          </div>
        </nav>
        <div class="tab-content mt-4" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {this.renderRanks()}
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {this.renderPets()}
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            {this.renderPets()}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductSelection;
