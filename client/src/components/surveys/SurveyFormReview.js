import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

class SurveyFormReview extends Component {
    render() {
        const reviewFields = _.map(formFields, ({ name, label}) => {
            return (
                <div key={name}>
                    <label className="text-light">{ label }</label>
                    <p className="border font-weight-normal bg-white rounded-lg">
                        {this.props.formValues[name]}
                    </p>
                </div>
            );
        });
    
        return (
            <div className="w-75 d-block mx-auto">
                <h5 className="text-success">Please confirm your entries</h5>
    
                {reviewFields}
    
                <div style={{ margin: '2rem' }}>
                <Button className="float-right" variant="primary" type="submit" 
                onClick={() => {
                    console.log(this.props.formValues)
                    console.log(this.props.history)
                    this.props.submitSurvey(this.props.formValues, this.props.history)}
                }>
                    Send Survey <span><FontAwesomeIcon icon={faMailBulk} /></span>
                </Button>

                <Button className="float-left" variant="secondary" onClick={this.props.onCancel}>
                    Back
                </Button>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(withRouter(SurveyFormReview));