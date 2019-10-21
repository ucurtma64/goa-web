import React, { Component } from "react";
import axios from "axios";

class PostContent extends Component {
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

    const res = await axios.post("/api/post", { postId });

    console.log("post");
    console.log(res);

    this.setState(res.data);
    console.log(this.state);
  }

  renderImage() {
    if (this.state.image) {
      return (
        <img
          class="img-fluid rounded mt-4 w-100"
          src={this.state.image}
          alt=""
        />
      );
    }
  }

  render() {
    if (!this.state.title) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {this.renderImage()}

            <h2 class="mt-4">{this.state.title}</h2>

            <p class="lead mt-n2">
              {" "}
              Posted on {new Date(
                this.state.dateSent
              ).toLocaleDateString()} by {this.state.author}
            </p>

            <hr />

            <p>{this.state.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostContent;
