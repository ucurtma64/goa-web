//Shows CreditSelection and BillingForm and CardForm
import React, { Component } from "react";
import BillingForm from "../commonForms/BillingForm";
import ProfileForm from "../commonForms/ProfileForm";
import MinecraftForm from "../commonForms/MinecraftForm";
import CardForm from "../credits/CardForm";
import HorizontalStepper from "../util/HorizontalStepper";

class Store extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    const formValues = {};

    this.state = Object.assign({ formStage: 0 }, { formValues });
  }

  renderContent() {
    if (this.state.formStage === 2) {
      return (
        <BillingForm
          formValues={this.state.formValues}
          onCancel={() => {
            this.setState({ formStage: 1 });
            this.gotoPreviousStage();
          }}
          onFormSubmit={fields => {
            const formValues = Object.assign(this.state.formValues, fields);
            this.setState(Object.assign({ formStage: 3 }, { formValues }));
            this.gotoNextStage();
          }}
        />
      );
    }

    if (this.state.formStage === 1) {
      return (
        <ProfileForm
          formValues={this.state.formValues}
          onCancel={() => {
            this.setState({ formStage: 0 });
            this.gotoPreviousStage();
          }}
          onFormSubmit={fields => {
            const formValues = Object.assign(this.state.formValues, fields);
            this.setState(Object.assign({ formStage: 2 }, { formValues }));
            this.gotoNextStage();
          }}
        />
      );
    }

    //if (this.state.formStage === 0)
    return (
      <MinecraftForm
        formValues={this.state.formValues}
        onFormSubmit={minecraftUsername => {
          const formValues = this.state.formValues;
          formValues.minecraftUsername = minecraftUsername;
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
            { title: "Minecraft Nickname", optional: "Required" },
            { title: "Select Product", optional: "Required" },
            { title: "Confirm Purchase", optional: "Required" }
          ]}
        />

        {this.renderContent()}
      </div>
    );
  }
}

export default Store;
