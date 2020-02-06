import React, { Component } from "react";
import Spinner from "./util/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faStore,
  faCoins,
  faUser,
  faSignOutAlt,
  faTools,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import $ from "jquery";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import logo192 from "assets/img/logo192.png";

class Header extends Component {
  state = {
    active: 9
  };

  handleClick(id) {
    this.setState({ active: id });
  }

  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  renderButtonsOnLeft() {
    const header = [
      <li
        className={this.state.active === 9 ? "nav-item active" : "nav-item"}
        key="9"
        onClick={() => this.handleClick(9)}
      >
        <Link className="nav-link text-body" to="/">
          <FontAwesomeIcon className="mx-1" icon={faHome} />
          Home
        </Link>
      </li>,
      <li
        className={this.state.active === 7 ? "nav-item active" : "nav-item"}
        key="7"
        onClick={() => this.handleClick(7)}
      >
        <Link className="nav-link text-body" to="/lore">
          <FontAwesomeIcon className="mx-1" icon={faBook} />
          Lore
        </Link>
      </li>
    ];

    return header;
  }

  showLoginModal() {
    $("#loginModal").modal("show");
  }

  showRegisterModal() {
    $("#registerModal").modal("show");
  }

  renderButtonsOnRight() {
    switch (this.props.auth) {
      case null:
        return <Spinner />;
      case false:
        return [
          <li className="nav-item" key="11">
            <a
              className="nav-link text-body"
              href="#registerModal"
              onClick={this.showRegisterModal}
            >
              <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
              Register
            </a>
          </li>,
          <li className="nav-item" key="10">
            <a
              className="nav-link text-body"
              href="#loginModal"
              onClick={this.showLoginModal}
            >
              <FontAwesomeIcon className="mr-2" icon={faSignInAlt} />
              Login
            </a>
          </li>
        ];
      default:
        const header = [
          <li
            className={this.state.active === 3 ? "nav-item active" : "nav-item"}
            key="3"
            onClick={() => this.handleClick(3)}
          >
            <Link className="nav-link text-body" to="/profile">
              <FontAwesomeIcon className="mx-1" icon={faUser} />
              Profile
            </Link>
          </li>,
          <li className="nav-item" key="2">
            <a className="nav-link text-body" href="/api/logout">
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
              <Link className="nav-link text-body" to="/admin">
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
      <div className="container">
        <div className="row">
          <div class="col">
            <Link
              className="navbar-brand"
              to={"/"}
              onClick={() => this.handleClick(9)}
            >
              <img src={logo192} alt="" className="" height="102" />
            </Link>
          </div>

          <div class="col pt-5 text-right">
            <a
              className="d-inline-block p-3"
              href="#"
              onClick={this.showLoginModal}
            >
              <FontAwesomeIcon className="mr-2" icon={faFacebook} />
            </a>
            <a
              className="d-inline-block p-3"
              href="#"
              onClick={this.showLoginModal}
            >
              <FontAwesomeIcon className="mr-2" icon={faTwitter} />
            </a>
            <a
              className="d-inline-block p-3"
              href="#"
              onClick={this.showLoginModal}
            >
              <FontAwesomeIcon className="mr-2" icon={faInstagram} />
            </a>
          </div>
        </div>
        <nav
          id="header"
          className="navbar navbar-expand-lg navbar-light mx-auto"
        >
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
            <ul className="navbar-nav mr-auto navbar-left-buttons">
              {this.renderButtonsOnLeft()}
            </ul>

            <ul className="navbar-nav my-2 my-lg-0 navbar-right-buttons">
              {this.renderButtonsOnRight()}
            </ul>
          </div>
          <LoginModal />
          <RegisterModal />
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
