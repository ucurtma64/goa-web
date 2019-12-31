import React, { Component } from "react";
import Spinner from "components/util/Spinner";
import { connect } from "react-redux";
import PostForm from "components/forms/PostForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

class AdminDashboard extends Component {
  showLoginModal() {
    $("#loginModal").modal("show");
  }

  render() {
    switch (this.props.auth) {
      case null:
        return <Spinner />;
      case false:
        return (
          <div className="row">
            <button
              className="mt-4 btn mx-auto"
              href="#loginModal"
              onClick={this.showLoginModal}
            >
              <FontAwesomeIcon className="mr-2" icon={faSignInAlt} />
              Login
            </button>
          </div>
        );
      default:
    }

    switch (this.props.auth.role) {
      case "admin":
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-3">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Send Post
                  </a>
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <PostForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <li className="" key="">
            <h1 className="" href="">
              you must be an admin
            </h1>
          </li>
        );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AdminDashboard);
