import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import { Link } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import AdminDashboard from "./views/admin/AdminDashboard";
import LandingPage from "./views/LandingPage";
import LoginPage from "./views/auth/LoginPage";
import RegisterPage from "./views/auth/RegisterPage";
import VerifyPage from "./views/auth/VerifyPage";
import LorePage from "./views/LorePage";
import StorePage from "./views/StorePage";
import ProfilePage from "./views/ProfilePage";
import AddCreditPage from "./views/credits/AddCreditPage";
import AddCreditCallbackPage from "./views/credits/AddCreditCallbackPage";
import SinglePostContentPage from "./views/SinglePostContentPage";
import MissingPage from "./views/MissingPage";

//utils
import NotificationTopBar from "./components/NotificationTopBar";
import NotificationModal from "./components/NotificationModal";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    if (this.props.auth) {
      if (!this.props.auth.verified) {
        this.props.notifyTopBar(
          true,
          "warning",
          <>
            Confirm your email address to access all features. A confirmation
            message was sent to {this.props.auth.email}{" "}
            <Link className="mx-2 text-dark" to="/register/verify">
              <u>Help?</u>
            </Link>
          </>
        );
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <NotificationTopBar />
          <Header />
          <Switch>
            <Route exact path="/admin" component={AdminDashboard} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route path="/register/verify" component={VerifyPage} />
            <Route path="/lore" component={LorePage} />
            <Route exact path="/store" component={StorePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/addcredit" component={AddCreditPage} />
            <Route
              path="/addcredit/callback"
              component={AddCreditCallbackPage}
            />
            <Route path="/post" component={SinglePostContentPage} />
            <Route component={MissingPage} />
          </Switch>
          <NotificationModal />
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
