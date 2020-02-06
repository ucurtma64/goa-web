import React, { Component } from "react";
import PostsHome from "components/posts/PostList";
import $ from "jquery";

class LandingPage extends Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  copyToClipboard = str => {
    const el = document.createElement("textarea"); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.left = "-9999px"; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    /*
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    */
    el.select(); // Select the <textarea> content
    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
  };

  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
            backgroundColor: "#fff",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }}
        >
          <div className="row">
            <div className="col text-center p-4">
              <img
                className="rounded-circle"
                src="https://inteng-storage.s3.amazonaws.com/img/iea/bM6A1p3X67/sizes/kite-drone_resize_md.jpg"
                alt=""
                width="160"
                height="160"
              />
              <h2 className="pt-4">Ucurtma</h2>
              <p className="pt-2">
                asdasdasdass adaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa
                aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <PostsHome />
        </div>
      </div>
    );
  }
}

export default LandingPage;
