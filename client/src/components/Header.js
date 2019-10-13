import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
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
        return [
          <li className="nav-item" key="1">
            <Link className="nav-link" to="/store">
              Store
            </Link>
          </li>,
          <li className="nav-item" key="3">
            <span className="navbar-text text-light">
              Credits: {this.props.auth.credits}
            </span>
          </li>,
          <li className="nav-item" key="4">
            <Link className="nav-link" to="/surveys">
              Surveys
            </Link>
          </li>,
          <li className="nav-item" key="5">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>,
          <li className="nav-item" key="2">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props.auth);

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/"}>
          Emaily
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a href="#" className="dropdown-item">
                  Action
                </a>
                <a href="#" className="dropdown-item">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  Something else here
                </a>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav my-2 my-lg-0">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
