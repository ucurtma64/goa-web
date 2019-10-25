import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import AdminDashboard from "./admin/AdminDashboard";
import Profile from "./profile/Profile";
import SurveyNew from "./surveys/SurveyNew";
import PaymentNew from "./merchant/PaymentNew";
import PaymentCallback from "./merchant/PaymentCallback";
import PostContent from "./posts/PostContent";
import NotificationModal from "./NotificationModal";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/store" component={PaymentNew} />
          <Route path="/store/callback" component={PaymentCallback} />
          <Route path="/post" component={PostContent} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <NotificationModal />
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
