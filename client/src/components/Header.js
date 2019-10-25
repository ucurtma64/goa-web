import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderButtonsOnLeft() {
    const header = [
      <li className="nav-item" key="7">
        <a
          className="nav-link"
          rel="noopener noreferrer"
          href="https://www.google.com/"
          target="_blank"
        >
          NewTab
        </a>
      </li>,
      <li className="nav-item" key="8">
        <Link className="nav-link" to="/store">
          Store1
        </Link>
      </li>,
      <li className="nav-item" key="1">
        <Link className="nav-link" to="/store">
          Store
        </Link>
      </li>
    ];

    return header;
  }

  renderButtonsOnRight() {
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
        const header = [
          <li className="nav-item" key="3">
            <span className="navbar-text text-light">
              Credits: {this.props.auth.credits}
            </span>
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

        if (this.props.auth.role === "admin") {
          header.push(
            <li className="nav-item" key="6">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          );
        }

        return header;
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
          <ul className="navbar-nav mr-auto">{this.renderButtonsOnLeft()}</ul>

          <ul className="navbar-nav my-2 my-lg-0">
            {this.renderButtonsOnRight()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
