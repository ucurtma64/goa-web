import React, { Component } from "react";
import Spinner from "./util/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faStore,
  faCoins,
  faUser,
  faSignOutAlt,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faWikipediaW } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  renderButtonsOnLeft() {
    const header = [
      <li className="nav-item active" key="7">
        <a
          className="nav-link"
          rel="noopener noreferrer"
          href="https://guardiansofadelia.fandom.com/wiki/GuardiansOfAdelia_Wiki"
          target="_blank"
        >
          <FontAwesomeIcon className="mx-1" icon={faWikipediaW} />
          wiki
        </a>
      </li>,
      <li className="nav-item active" key="8">
        <Link className="nav-link" to="/lore">
          <FontAwesomeIcon className="mx-1" icon={faBook} />
          Lore
        </Link>
      </li>,
      <li className="nav-item active" key="1">
        <Link className="nav-link" to="/store">
          <FontAwesomeIcon className="mx-1" icon={faStore} />
          Store
        </Link>
      </li>
    ];

    return header;
  }

  renderButtonsOnRight() {
    switch (this.props.auth) {
      case null:
        return <Spinner />;
      case false:
        return (
          <li className="nav-item active" key="4">
            <a className="nav-link" href="/auth/google">
              <FontAwesomeIcon className="mr-2" icon={faGoogle} />
              Login with google
            </a>
          </li>
        );
      default:
        const header = [
          <li className="nav-item active" key="3">
            <Link className="nav-link" to="/addcredit">
              <FontAwesomeIcon className="mx-1" icon={faCoins} />
              Credits: {this.props.auth.credits}
            </Link>
          </li>,
          <li className="nav-item active" key="5">
            <Link className="nav-link" to="/profile">
              <FontAwesomeIcon className="mx-1" icon={faUser} />
              Profile
            </Link>
          </li>,
          <li className="nav-item active" key="2">
            <a className="nav-link" href="/api/logout">
              <FontAwesomeIcon className="mx-1" icon={faSignOutAlt} />
              Logout
            </a>
          </li>
        ];

        if (this.props.auth.role === "admin") {
          header.push(
            <li className="nav-item active" key="6">
              <Link className="nav-link" to="/admin">
                <FontAwesomeIcon className="mx-1" icon={faTools} />
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
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "transparent"
        }}
      >
        <Link className="navbar-brand" to={"/"}>
          <img
            src="https://i.ibb.co/bPfdcsR/iconk.png"
            alt=""
            className="mr-1"
          />
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
