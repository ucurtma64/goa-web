import React, { Component } from "react";
import ProductCard from "../ProductCard";
import angel from "assets/img/headgear/wings-angel.png";
import demon from "assets/img/headgear/wings-demon.png";
import dragonDark from "assets/img/headgear/wings-dragon-dark.png";
import dragonLight from "assets/img/headgear/wings-dragon-light.png";
import crown from "assets/img/headgear/crown.png";

class ProductsSkins extends Component {
  render() {
    return (
      <section className="">
        <nav>
          <div className="nav nav-tabs" id="nav-tab-shop" role="tablist">
            <a
              className="nav-item nav-link active mx-auto"
              id="nav-weaponskins-tab"
              data-toggle="tab"
              href="#nav-weaponskins"
              role="tab"
              aria-controls="nav-weaponskins"
              aria-selected="true"
            >
              Weapon Skins
            </a>
            <a
              className="nav-item nav-link mx-auto"
              id="nav-helmetskins-tab"
              data-toggle="tab"
              href="#nav-helmetskins"
              role="tab"
              aria-controls="nav-helmetskins"
              aria-selected="false"
            >
              Helmet Skins
            </a>
            <a
              className="nav-item nav-link mx-auto"
              id="nav-petskins-tab"
              data-toggle="tab"
              href="#nav-petskins"
              role="tab"
              aria-controls="nav-petskins"
              aria-selected="false"
            >
              Pet Skins
            </a>
          </div>
        </nav>
        <div className="tab-content mt-4" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-weaponskins"
            role="tabpanel"
            aria-labelledby="nav-weaponskins-tab"
          >
            {this.renderWeapons()}
          </div>
          <div
            className="tab-pane fade"
            id="nav-helmetskins"
            role="tabpanel"
            aria-labelledby="nav-helmetskins-tab"
          >
            {this.renderHeadgear()}
          </div>
          <div
            className="tab-pane fade"
            id="nav-petskins"
            role="tabpanel"
            aria-labelledby="nav-petskins-tab"
          >
            {this.renderPets()}
          </div>
        </div>
      </section>
    );
  }

  renderWeapons() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 4,
            credits: 50,
            name: "1x Weapon/Shield Skin Scroll",
            description:
              "Use on your weapon or shield to give it a visual effect. (Your item must be level 50 or higher)",
            image: "https://media.giphy.com/media/1mhU3YqvhgLv2utfKv/giphy.gif"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 5,
            credits: 100,
            name: "2x Weapon/Shield Skin Scroll",
            description:
              "Use on your weapon or shield to give it a visual effect. (Your item must be level 50 or higher)",
            image: "https://media.giphy.com/media/8YKZGnI8Eb6qD83tLa/giphy.gif"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 6,
            credits: 200,
            name: "5x Weapon/Shield Skin Scroll",
            description:
              "Use on your weapon or shield to give it a visual effect. (Your item must be level 50 or higher)",
            image: "https://media.giphy.com/media/2kSUhLi6vm0mmEvHOm/giphy.gif"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
      </div>
    );
  }

  renderHeadgear() {
    return (
      <div className="row card-deck">
        <ProductCard
          product={{
            productId: 7,
            credits: 100,
            name: "Angel Wings",
            description:
              "Right click to change visual appearance of your equiped helmet.",
            image: angel
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 8,
            credits: 100,
            name: "Demon Wings",
            description:
              "Right click to change visual appearance of your equiped helmet.",
            image: demon
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 9,
            credits: 100,
            name: "Dark Dragon Wings",
            description:
              "Right click to change visual appearance of your equiped helmet.",
            image: dragonDark
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 10,
            credits: 100,
            name: "White Dragon Wings",
            description:
              "Right click to change visual appearance of your equiped helmet.",
            image: dragonLight
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 11,
            credits: 50,
            name: "Golden Crown",
            description:
              "Right click to change visual appearance of your equiped helmet.",
            image: crown
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
            productId: 12,
            credits: 100,
            name: "Bee",
            description:
              "Right click to your pet to change it's visual appearance.",
            image: "https://i.ibb.co/DRFSv47/bee.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 13,
            credits: 100,
            name: "Red Fox",
            description:
              "Right click to your pet to change it's visual appearance.",
            image: "https://i.ibb.co/LtdZm9J/fox-red.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 14,
            credits: 100,
            name: "Snow Fox",
            description:
              "Right click to your pet to change it's visual appearance.",
            image: "https://i.ibb.co/CQq5xny/fox-snow.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 15,
            credits: 100,
            name: "Ice Cream",
            description:
              "Right click to your pet to change it's visual appearance.",
            image: "https://i.ibb.co/hdVTH08/icecream.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 16,
            credits: 100,
            name: "Vex",
            description:
              "Right click to your pet to change it's visual appearance.",
            image: "https://i.ibb.co/Jks4Cqq/vex.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
        <ProductCard
          product={{
            productId: 17,
            credits: 100,
            name: "Baby Dragon",
            description:
              "Right click to your pet to change it's visual appearance.",
            image: "https://i.ibb.co/hygWC4R/mini-dragon.png"
          }}
          onFormSubmit={productSelection =>
            this.props.onFormSubmit(productSelection)
          }
        />
      </div>
    );
  }
}

export default ProductsSkins;
