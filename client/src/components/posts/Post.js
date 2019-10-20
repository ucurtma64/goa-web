import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div class="card mb-4">
        <img
          class="card-img-top"
          src="http://placehold.it/750x300"
          alt="Card image cap"
        />
        <div class="card-body">
          <h2 class="card-title">{this.props.title}</h2>
          <p class="card-text">{this.props.text}</p>
          <a href="#" class="btn btn-primary">
            Read More &rarr;
          </a>
        </div>
        <div class="card-footer text-muted">
          Posted on {this.props.date} by {this.props.author}
        </div>
      </div>
    );
  }
}

export default Post;
