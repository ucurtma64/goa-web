//Shows SurveyForm and SurveyFormReview
import _ from 'lodash';
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import formFields from './formFields';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        const formValues = {}

        _.map(formFields, ({ name }) => {
            formValues[name] = '';
        });

        console.log(Object.assign( { showFormReviev: false }, { formValues }));

        this.state = Object.assign( { showFormReviev: false }, { formValues });
    }

    renderContent() {
        if (this.state.showFormReviev) {
            console.log(this.state);
            return <SurveyFormReview formValues={this.state.formValues}
                onCancel={() => this.setState({ showFormReviev: false })}
            />
        }

        return <SurveyForm formValues={this.state.formValues}
            onSurveySubmit={(fields) => {
                const formValues = {}

                _.map(formFields, ({ name }) => {
                    formValues[name] = fields[name];
                });

                console.log(Object.assign( { showFormReviev: false }, { formValues }));

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