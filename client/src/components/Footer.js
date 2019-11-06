import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer pt-5 container-fluid">
        <div className="row">
          <div className="col text-left">
            <a className="mr-3" href="mailto:lixakyildiz@gmail.com">
              Business Contact
            </a>
            <a className="" href="#">
              Back to top
            </a>
          </div>
          <div className="col text-right">
            <p className="">&copy; Copyright 2019, Guardians of Adelia</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
