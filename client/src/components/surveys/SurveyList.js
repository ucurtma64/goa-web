import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Pagination from "../util/Pagination";
import { Card, ListGroup } from 'react-bootstrap';

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
            <Fragment className="container">

                <h3 className="row" style={{ margin: '1rem' }} align="center">
                        <div className="total-records col">{totalSurveys}{" "}Surveys</div>

                        <Pagination className="col"
                            totalRecords={totalSurveys}
                            pageLimit={4}
                            pageNeighbours={1}
                            onPageChanged={this.onPageChanged}
                        />

                        {currentPage && (
                            <div className="current-page col">
                                Page <span >{currentPage}/{totalPages}</span>
                            </div>
                        )}
                </h3>

                <div className="row justify-content-center">
                    {currentSurveys.map(survey => (
                        <Card style={{ width: '18rem', margin: '2rem' }} key={survey._id}>
                            <Card.Body>
                            <Card.Title>{survey.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</Card.Subtitle>
                            <Card.Text>
                                {survey.body}
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Yes: {survey.yes}</ListGroup.Item>
                                <ListGroup.Item>No: {survey.no}</ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);