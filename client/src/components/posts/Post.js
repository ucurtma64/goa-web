import React, { Component } from "react";

class Post extends Component {
  renderImage() {
    if (this.props.image) {
      return (
        <img class="card-img-top" src={this.props.image} alt="Card image cap" />
      );
    }
  }

  render() {
    return (
      <div class="card mb-4">
        {this.renderImage()}

        <div class="card-body">
          <h2 class="card-title">{this.props.title}</h2>
          <p class="card-text">{this.props.text}</p>
          <a href="#" class="btn btn-primary">
            Read More &rarr;
          </a>
        </div>
        <div class="card-footer text-muted">
          Posted on {new Date(this.props.date).toLocaleDateString()} by{" "}
          {this.props.author}
        </div>
      </div>
    );
  }
}

export default Post;
