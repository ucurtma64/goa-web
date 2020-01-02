import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

class LoginStrategies extends Component {
  render() {
    return (
      <>
        <div className="row">
          <a
            className="col mx-4 nav-link login login-google"
            href="/auth/google"
          >
            <FontAwesomeIcon className="mr-2" icon={faGoogle} />
            Login with Google
          </a>
          <a
            className="col mx-4 nav-link login login-github"
            href="/auth/github"
          >
            <FontAwesomeIcon className="mr-2" icon={faGithub} />
            Login with GitHub
          </a>
        </div>
        <div className="row mt-2">
          <a
            className="col mx-4 nav-link login login-twitter"
            href="/auth/twitter"
          >
            <FontAwesomeIcon className="mr-2" icon={faTwitter} />
            Login with Twitter
          </a>
          <a
            className="col mx-4 nav-link login login-facebook"
            href="/auth/facebook"
          >
            <FontAwesomeIcon className="mr-2" icon={faFacebook} />
            Login with Facebook
          </a>
        </div>
      </>
    );
  }
}

export default LoginStrategies;
