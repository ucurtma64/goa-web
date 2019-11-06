import React from "react";
import PostsHome from "./posts/PostsHome";

const Landing = () => {
  return (
    <div>
      <div
        className="container-fluid intro"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          backgroundImage: "url('https://i.ibb.co/Sx5M0ch/intro.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="row">
          <div className="col text-center">
            <img
              className="img-fluid pb-2"
              src="https://i.ibb.co/SmnMm5L/logo.png"
              alt="logo"
            />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <button className="btn landing-btn text-light">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <PostsHome className="row" />
      </div>
    </div>
  );
};

export default Landing;
