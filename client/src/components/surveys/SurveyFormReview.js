import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class SurveyFormReview extends Component {
    render() {
        const reviewFields = _.map(formFields, ({ name, label}) => {
            return (
                <div key={name}>
                    <label>{ label }</label>
                    <div>
                        {this.props.formValues[name]}
                    </div>
                </div>
            );
        });
    
        return (
            <div>
                <h5>Please confirm your entries</h5>
    
                {reviewFields}
    
                <button 
                    className="yellow darken-3 white-text btn-flat"
                    onClick={this.props.onCancel}
                >
                    Back
                </button>
                <button 
                    className="green white-text btn-flat right"
                    onClick={() => {
                        console.log(this.props.formValues)
                        console.log(this.props.history)
                        actions.submitSurvey(this.props.formValues, this.props.history)}
                    }
                >
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
            </div>
        )
    }
}

export default connect(null, actions)(withRouter(SurveyFormReview));