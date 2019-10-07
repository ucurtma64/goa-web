import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import SurveyNew from "./surveys/SurveyNew";
import PaymentNew from "./merchant/PaymentNew";
import PaymentCallback from "./merchant/PaymentCallback";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/store" component={PaymentNew} />
        <Route path="/store/callback" component={PaymentCallback} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
