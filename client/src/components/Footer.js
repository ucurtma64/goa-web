import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-4 container-fluid">
        <div className="row">
          <small className="col text-left">
            <a className="mr-2" href="mailto:lixakyildiz@gmail.com">
              Business Contact
            </a>
            <a className="" href="#header">
              Back to top
            </a>
          </small>
          <small className="col text-right">
            <p className="">&copy; Copyright 2019, Guardians of Adelia</p>
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
