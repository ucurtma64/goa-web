import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileForm from "../commonForms/ProfileForm";
import BillingForm from "../commonForms/BillingForm";
import * as actions from "../../actions";

class Profile extends Component {
  render() {
    switch (this.props.auth) {
      case null:
        return (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        );
      case false:
        return (
          <li className="nav-item" key="4">
            <a className="nav-link" href="/auth/google">
              Login with google
            </a>
          </li>
        );
      default:
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-3">
                <div class="text-light text-center pb-2">
                  <img
                    src="https://data.whicdn.com/images/313295970/original.jpg"
                    class="rounded-circle w-50 pb-1"
                    alt=""
                  />
                  <div>little jean</div>
                  <div className="period mt-n1">writer</div>
                </div>
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active text-light"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile
                  </a>
                  <a
                    className="nav-link text-light"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Billing
                  </a>
                  <a
                    className="nav-link text-light"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Messages
                  </a>
                  <a
                    className="nav-link text-light"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Settings
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
                    <ProfileForm
                      onSurveySubmit={fields => {
                        this.props.updateUser(fields);
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <BillingForm
                      onSurveySubmit={fields => {
                        this.props.updateUser(fields);
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    ...3
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    ...4
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Profile);
