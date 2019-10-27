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
import AddCredit from "./merchant/AddCredit";
import AddCreditCallback from "./merchant/AddCreditCallback";
import PostContent from "./posts/PostContent";
import NotificationModal from "./NotificationModal";
import Lore from "./Lore";

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
          <Route exact path="/addcredit" component={AddCredit} />
          <Route path="/addcredit/callback" component={AddCreditCallback} />
          <Route path="/post" component={PostContent} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/lore" component={Lore} />
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
