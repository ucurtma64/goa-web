import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer pt-5">
        <div className="text-left float-left">
          <a className="px-3" href="mailto:lixakyildiz@gmail.com">
            Business Contact
          </a>
          <a className="px-3" href="#">
            Back to top
          </a>
        </div>
        <div className="text-right px-3">
          <p>&copy; Copyright 2019, Guardians of Adelia</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
