//Shows SurveyForm and SurveyFormReview
import _ from 'lodash';
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const formValues = {}

        this.state = Object.assign( { showFormReviev: false }, { formValues });
    }

    renderContent() {
        if (this.state.showFormReviev) {
            return <SurveyFormReview formValues={this.state.formValues}
                onCancel={() => this.setState({ showFormReviev: false })}
            />
        }

        return <SurveyForm formValues={this.state.formValues}
            onSurveySubmit={(fields) => {
                const formValues = fields;

                this.setState(Object.assign( { showFormReviev: true }, { formValues }));
            }}
        />
    }

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

export default SurveyNew;