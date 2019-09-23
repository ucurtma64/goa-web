//Shows Store and customerForm
import _ from 'lodash';
import React, { Component } from 'react';
import Store from './Store';
import CustomerForm from './CustomerForm';
import HorizontalStepper from '../util/HorizontalStepper';

class PaymentNew extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const formValues = {}

        this.state = Object.assign( { formStage: 0 }, { formValues });
    }

    renderContent() {
        if (this.state.formStage === 2) {
            return <Store 
                formValues={this.state.formValues}

                onCancel={() => {
                    this.setState({ formStage: 1 })
                    this.gotoPreviousStage();
                }}
            />
        }

        if (this.state.formStage === 1) {
            return <CustomerForm 
                formValues={this.state.formValues}

                onCancel={() => {
                    this.setState({ formStage: 0 })
                    this.gotoPreviousStage();
                }}

                onSurveySubmit={(fields) => {
                    const formValues = fields;
    
                    this.setState(Object.assign( { formStage: 2 }, { formValues }));

                    this.gotoNextStage();
                }}
            />
        }

        //if (this.state.formStage === 0)
        return <Store 
            formValues={this.state.formValues}
            
            onSurveySubmit={(productId) => {
                const formValues = this.state.formValues;
                formValues.productId = productId;

                this.setState(Object.assign( { formStage: 1 }, { formValues }));

                this.gotoNextStage();
            }}
        />
    }

    gotoNextStage(){
        this.refs.horizontalStepper.gotoNextStage();
    }

    gotoPreviousStage(){
        this.refs.horizontalStepper.gotoPreviousStage();
    }

    render() {
        return (
            <div>
                <HorizontalStepper ref="horizontalStepper"
                    stages= {[
                        {title: 'Select Product', optional: 'Required'}, 
                        {title: 'Billing Info', optional: 'Required'}, 
                        {title: 'Payment', optional: 'Required'}
                    ]}
                />

                { this.renderContent() }
            </div>
        )
    }
}

export default PaymentNew;