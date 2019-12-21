import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductSelection extends Component {
  renderPets() {
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
              Pet Skins
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
              Helmet Skins
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
              Contact
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
            {this.renderPets()}
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            ...
          </div>
        </div>
      </section>
    );
  }
}

export default ProductSelection;
