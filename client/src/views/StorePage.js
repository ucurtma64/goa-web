//Shows CreditSelection and BillingForm and CardForm
import React, { Component } from "react";
import ProductConfirmation from "components/store/ProductConfirmation";
import ProductSelection from "components/store/ProductSelection";
import MinecraftForm from "components/forms/MinecraftForm";
import HorizontalStepper from "components/util/HorizontalStepper";

class StorePage extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    const formValues = {};

    this.state = Object.assign({ formStage: 0 }, { formValues });
  }

  renderContent() {
    if (this.state.formStage === 2) {
      return (
        <ProductConfirmation
          formValues={this.state.formValues}
          onCancel={() => {
            this.setState({ formStage: 1 });
            this.gotoPreviousStage();
          }}
        />
      );
    }

    if (this.state.formStage === 1) {
      return (
        <div className="container">
          <p className="text-danger text-center">
            You must have joined the server at least once with this username
          </p>
          <MinecraftForm
            formValues={this.state.formValues}
            onFormSubmit={fields => {
              const formValues = this.state.formValues;
              formValues.minecraftUsername = fields.minecraftUsername;
              this.setState(Object.assign({ formStage: 2 }, { formValues }));
              this.gotoNextStage();
            }}
            onCancel={() => {
              this.setState({ formStage: 0 });
              this.gotoPreviousStage();
            }}
          />
        </div>
      );
    }

    //if (this.state.formStage === 0)
    return (
      <ProductSelection
        formValues={this.state.formValues}
        onFormSubmit={productSelection => {
          const formValues = this.state.formValues;
          formValues.productSelection = productSelection;
          this.setState(Object.assign({ formStage: 1 }, { formValues }));
          this.gotoNextStage();
        }}
      />
    );
  }

  gotoNextStage() {
    this.refs.horizontalStepper.gotoNextStage();
  }

  gotoPreviousStage() {
    this.refs.horizontalStepper.gotoPreviousStage();
  }

  render() {
    return (
      <div>
        <HorizontalStepper
          ref="horizontalStepper"
          stages={[
            { title: "Select Product", optional: "" },
            { title: "Minecraft Username", optional: "" },
            { title: "Confirm Purchase", optional: "" }
          ]}
        />

        {this.renderContent()}
      </div>
    );
  }
}

export default StorePage;
