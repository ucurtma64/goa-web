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
                <div className="container">
                    <h3 className="row" style={{ margin: '1rem' }} align="center">
                            <div className="total-records col text-light">{totalSurveys}{" "}Surveys</div>

                            <Pagination className="col"
                                totalRecords={totalSurveys}
                                pageLimit={4}
                                pageNeighbours={1}
                                onPageChanged={this.onPageChanged}
                            />

                            {currentPage && (
                                <div className="current-page col text-light">
                                    Page <span >{currentPage}/{totalPages}</span>
                                </div>
                            )}
                    </h3>

                    <div className="row">
                        {currentSurveys.map(survey => (
                            <div className="card text-white bg-dark mb-3 col" style={{ maxWidth: '18rem', margin: '2rem' }}>
                                <div className="card-header">
                                    <h5 className="card-title">{survey.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</h6>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{survey.body}</p>
                                    <div className="card-text">
                                        <p className="float-left">Yes: {survey.yes}</p>
                                        <p className="float-right">No: {survey.no}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);