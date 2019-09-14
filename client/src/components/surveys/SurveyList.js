import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Pagination from "../util/Pagination";

class SurveyList extends Component {
    state = {
        allSurveysReversed: [],
        currentSurveys: [],
        currentPage: null,
        totalPages: null
    };

    async componentDidMount() {
        await this.props.fetchSurveys(); //wait for async method to complete so this.props.surveys at next lines is not null

        const allSurveysReversed = this.props.surveys.reverse(); //reverse array so it is new to old
        this.setState({ allSurveysReversed });
    }

    onPageChanged = data => {
        const { allSurveysReversed } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentSurveys = allSurveysReversed.slice(offset, offset + pageLimit);

        console.log(this.props.surveys);
        console.log(offset);
    
        this.setState({ currentPage, currentSurveys, totalPages });
    };

    render() {
        const {
            allSurveysReversed,
            currentSurveys,
            currentPage,
            totalPages
        } = this.state;

          const totalSurveys = allSurveysReversed.length;

          if (totalSurveys === 0) return null;

          return (
            <Fragment>
                <div className="row">
                    <h3>
                        <div className="total-records col s4 left-align">{totalSurveys}{" "}Surveys</div>

                        <div className="col s4 center-align">
                            <Pagination 
                                totalRecords={totalSurveys}
                                pageLimit={3}
                                pageNeighbours={1}
                                onPageChanged={this.onPageChanged}
                            />
                        </div>

                        {currentPage && (
                            <div className="current-page col s4 right-align">
                                Page <span >{currentPage}/{totalPages}</span>
                            </div>
                        )}
                    </h3>
                </div>

                {currentSurveys.map(survey => (
                    <div className="card z-depth-2" key={survey._id}>
                        <div className="card-content">
                            <span className="card-title">{survey.title}</span>
                            <p>{survey.body}</p>
                            <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Yes: {survey.yes}</a>
                            <a href="#">No: {survey.no}</a>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);