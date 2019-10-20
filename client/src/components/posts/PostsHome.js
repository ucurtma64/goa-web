import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Post from "./Post";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
import Pagination from "../util/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class PostsHome extends Component {
  state = {
    allPostsReversed: [],
    currentPosts: [],
    currentPage: null,
    totalPages: null
  };

  async componentDidMount() {
    await this.props.fetchPosts(); //wait for async method to complete so this.props.posts at next lines is not null

    const allPostsReversed = this.props.posts.reverse(); //reverse array so it is new to old
    this.setState({ allPostsReversed });
  }

  onPageChanged = data => {
    const { allPostsReversed } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPosts = allPostsReversed.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPosts, totalPages });
  };

  renderPosts() {
    const {
      allPostsReversed,
      currentPosts,
      currentPage,
      totalPages
    } = this.state;

    const totalPosts = allPostsReversed.length;

    if (totalPosts === 0) return null;

    const headerClass = [
      "text-light py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

    return (
      <>
        {currentPosts.map(post => (
          <Post
            title={post.title}
            text={post.text}
            date={post.dateSent}
            author={post.author}
            image={post.image}
          />
        ))}

        <div className="w-100 d-flex flex-row flex-wrap align-items-center justify-content-between">
          <div className="d-flex flex-row py-4 align-items-center">
            <h2 className={headerClass}>
              <strong className="text-light">{totalPosts}</strong> Posts
            </h2>

            {currentPage && (
              <span className="current-page d-inline-block h-100 pl-4 text-light">
                Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                <span className="font-weight-bold">{totalPages}</span>
              </span>
            )}
          </div>

          <div className="d-flex flex-row py-4 align-items-center">
            <Pagination
              totalRecords={totalPosts}
              pageLimit={2}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="text-center m-5 font-weight-bold">Lastest Posts</h1>

            {this.renderPosts()}
          </div>

          <div class="col-md-4">
            <h1 class="text-center m-5 font-weight-bold">
              <FontAwesomeIcon icon={faTwitter} />
            </h1>
            <div class="h-75 mt-5">
              <TwitterTimelineEmbed
                theme="dark"
                sourceType="profile"
                screenName="loykAd"
                options={{ height: 480 }}
                lang="en"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsHome);
