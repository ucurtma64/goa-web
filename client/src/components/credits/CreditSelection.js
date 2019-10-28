import React, { Component } from "react";
import CreditSelectionCard from "./CreditSelectionCard";

class CreditSelection extends Component {
  rendercreditSelections() {
    return (
      <div className="row card-deck">
        <CreditSelectionCard
          creditSelection={{
            productId: 1,
            price: 1,
            name: "50 credits",
            description: "No bonus credits",
            category: "credit"
          }}
          onFormSubmit={creditSelection =>
            this.props.onFormSubmit(creditSelection)
          }
        />
        <CreditSelectionCard
          creditSelection={{
            productId: 2,
            price: 2,
            name: "100 credits",
            description: "+20 bonus credits",
            category: "credit"
          }}
          onFormSubmit={creditSelection =>
            this.props.onFormSubmit(creditSelection)
          }
        />
        <CreditSelectionCard
          creditSelection={{
            productId: 3,
            price: 5,
            name: "250 credits",
            description: "+80 bonus credits",
            category: "credit"
          }}
          onFormSubmit={creditSelection =>
            this.props.onFormSubmit(creditSelection)
          }
        />
        <CreditSelectionCard
          creditSelection={{
            productId: 4,
            price: 10,
            name: "500 credits",
            description: "+200 bonus credits",
            category: "credit"
          }}
          onFormSubmit={creditSelection =>
            this.props.onFormSubmit(creditSelection)
          }
        />
        <CreditSelectionCard
          creditSelection={{
            productId: 5,
            price: 15,
            name: "750 credits",
            description: "+350 bonus credits",
            category: "credit"
          }}
          onFormSubmit={creditSelection =>
            this.props.onFormSubmit(creditSelection)
          }
        />
        <CreditSelectionCard
          creditSelection={{
            productId: 6,
            price: 20,
            name: "1000 credits",
            description: "+700 bonus credits",
            category: "credit"
          }}
          onFormSubmit={creditSelection =>
            this.props.onFormSubmit(creditSelection)
          }
        />
      </div>
    );
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">{this.rendercreditSelections()}</div>
      </section>
    );
  }
}

export default CreditSelection;
