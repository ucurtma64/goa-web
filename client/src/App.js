import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import AdminDashboard from "./views/admin/AdminDashboard";
import LandingPage from "./views/LandingPage";
import LoginPage from "./views/LoginPage";
import LorePage from "./views/LorePage";
import StorePage from "./views/StorePage";
import ProfilePage from "./views/ProfilePage";
import AddCreditPage from "./views/credits/AddCreditPage";
import AddCreditCallbackPage from "./views/credits/AddCreditCallbackPage";
import SinglePostContentPage from "./views/SinglePostContentPage";

//utils
import NotificationModal from "./components/NotificationModal";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="main-container">
            <Header />
            <Route exact path="/admin" component={AdminDashboard} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/lore" component={LorePage} />
            <Route exact path="/store" component={StorePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/addcredit" component={AddCreditPage} />
            <Route
              path="/addcredit/callback"
              component={AddCreditCallbackPage}
            />
            <Route path="/post" component={SinglePostContentPage} />
            <NotificationModal />
          </div>

          <Footer />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
