import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component {
  renderImage() {
    if (this.props.image) {
      return <img className="card-img-top" src={this.props.image} alt="" />;
    }
  }

  renderTextPreview() {
    const limit = 240;

    if (this.props.text.length > limit) {
      const preview = this.props.text.substring(0, limit - 1);

      return preview + "...";
    }

    return this.props.text;
  }

  render() {
    const postLink = "post/" + this.props._id;

    return (
      <div className="card mb-4">
        {this.renderImage()}

        <div className="card-body">
          <h2 className="card-title text-capitalize">
            <u>{this.props.title}</u>
          </h2>
          <p className="card-text">{this.renderTextPreview()}</p>
        </div>
        <div className="card-footer row w-100 mx-auto">
          <div className="col text-left">
            Posted on {new Date(this.props.date).toLocaleDateString()} by{" "}
            {this.props.author}
          </div>
          <Link to={postLink} className="col text-right">
            Read More &rarr;
          </Link>
        </div>
      </div>
    );
  }
}

export default PostCard;
