import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Store extends Component {
    render() {
        return (
            <button className="btn">
                Add Credits
            </button>
        )
    }
}

export default connect(null, actions)(Store);