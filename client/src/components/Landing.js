import React from "react";
import PostsHome from "./posts/PostsHome";

const Landing = () => {
  return (
    <div>
      <div
        className="container-fluid intro"
        style={{
          paddingTop: "4rem",
          paddingBottom: "16rem",
          backgroundImage:
            "url('https://vignette.wikia.nocookie.net/hytale-italia/images/5/50/Wiki-background/revision/latest?cb=20190110145409')",
          backgroundRepeat: "no-repeat"
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
