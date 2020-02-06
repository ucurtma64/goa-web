import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-4 container-fluid">
        <div className="row">
          <small className="col text-left">
            <a className="mr-2" href="mailto:lixakyildiz@gmail.com">
              Email Gönder
            </a>
            <a className="" href="#header">
              Yukarı Dön
            </a>
          </small>
          <small className="col text-right">
            <p className="">
              &copy; Copyright {new Date().getFullYear()}, Eren Akyıldız
            </p>
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
