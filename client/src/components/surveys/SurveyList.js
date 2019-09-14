import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        //TODO pagination
        return this.props.surveys.reverse().slice(0, 10).map(survey => {
            return (
                <div class="card z-depth-2" key={survey._id}>
                    <div class="card-content">
                        <span class="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Yes: {survey.yes}</a>
                        <a href="#">No: {survey.no}</a>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>{this.renderSurveys()}</div>

        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);