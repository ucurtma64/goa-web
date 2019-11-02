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
  state = {
    active: 0
  };

  handleClick(id) {
    this.setState({ active: id });
  }

  renderButtonsOnLeft() {
    const header = [
      <li className="nav-item" key="8">
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
      <li
        className={this.state.active === 7 ? "nav-item active" : "nav-item"}
        key="7"
        onClick={() => this.handleClick(7)}
      >
        <Link className="nav-link" to="/lore">
          <FontAwesomeIcon className="mx-1" icon={faBook} />
          Lore
        </Link>
      </li>,
      <li
        className={this.state.active === 6 ? "nav-item active" : "nav-item"}
        key="6"
        onClick={() => this.handleClick(6)}
      >
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
          <li className="nav-item" key="5">
            <a className="nav-link" href="/auth/google">
              <FontAwesomeIcon className="mr-2" icon={faGoogle} />
              Login with google
            </a>
          </li>
        );
      default:
        const header = [
          <li
            className={this.state.active === 4 ? "nav-item active" : "nav-item"}
            key="4"
            onClick={() => this.handleClick(4)}
          >
            <Link className="nav-link" to="/addcredit">
              <FontAwesomeIcon className="mx-1" icon={faCoins} />
              Credits: {this.props.auth.credits}
            </Link>
          </li>,
          <li
            className={this.state.active === 3 ? "nav-item active" : "nav-item"}
            key="3"
            onClick={() => this.handleClick(3)}
          >
            <Link className="nav-link" to="/profile">
              <FontAwesomeIcon className="mx-1" icon={faUser} />
              Profile
            </Link>
          </li>,
          <li className="nav-item" key="2">
            <a className="nav-link" href="/api/logout">
              <FontAwesomeIcon className="mx-1" icon={faSignOutAlt} />
              Logout
            </a>
          </li>
        ];

        if (this.props.auth.role === "admin") {
          header.push(
            <li
              className={
                this.state.active === 1 ? "nav-item active" : "nav-item"
              }
              key="1"
              onClick={() => this.handleClick(1)}
            >
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
        className="navbar navbar-expand-lg navbar-light mx-auto"
        style={{
          backgroundColor: "transparent",
          maxWidth: "1300px"
        }}
      >
        <Link
          className="navbar-brand"
          to={"/"}
          onClick={() => this.handleClick(0)}
        >
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
