import React, { Component } from "react";
import Spinner from "components/util/Spinner";
import axios from "axios";

class SinglePostContentPage extends Component {
  state = {
    _id: "",
    title: "",
    text: "",
    author: "",
    image: "",
    dateSent: ""
  };

  async componentDidMount() {
    const postId = this.props.history.location.pathname.replace("/post/", "");

    const res = await axios.get("/api/post?postId=" + postId);

    this.setState(res.data);
  }

  renderImage() {
    if (this.state.image) {
      return (
        <img
          className="img-fluid rounded mt-4 w-100"
          src={this.state.image}
          alt=""
        />
      );
    }
  }

  render() {
    if (!this.state.title) {
      return <Spinner />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {this.renderImage()}

            <h1 className="pt-2">{this.state.title}</h1>

            <span>
              <small className="">
                {new Date(this.state.dateSent).toDateString()} by{" "}
                {this.state.author}
              </small>
            </span>

            <hr />

            <p>{this.state.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePostContentPage;
