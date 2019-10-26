import React from "react";
import PostsHome from "./posts/PostsHome";

const Landing = () => {
  return (
    <div className="container pt-5 mw-100">
      <div className="row text-center">
        <div className="col p-5">
          <img
            className="rounded img-fluid pb-2"
            src="https://i.postimg.cc/445Cwt3s/Optimized-2019-08-22-02-19-15.jpg"
            alt="8 different classes"
          />
          <h3 className="font-weight-bold">8 different classes</h3>
          <p>
            There are eight different classes waiting to be discovered! Each
            class has different play style, weapons and skills.
          </p>
        </div>
        <div className="col p-5">
          <img
            className="rounded img-fluid pb-2"
            src="https://media.giphy.com/media/5nbDogvtGpAtQBsaMF/giphy.gif"
            alt="Passion"
          />
          <h3 className="font-weight-bold">Passion!</h3>
          <p>
            Developed with passion for years. GuardiansOfAdelia is ready to
            offer you lots of content!
          </p>
        </div>
        <div className="col p-5">
          <img
            className="rounded img-fluid pb-2"
            src="https://i.postimg.cc/SxvFph0s/Optimized-2019-08-22-02-50-29.jpg"
            alt="A new fantasy world"
          />
          <h3 className="font-weight-bold">A new fantasy world</h3>
          <p>Get into a new adventure and explore the lore of Adelia.</p>
        </div>
      </div>

      <PostsHome className="row" />
    </div>
  );
};

export default Landing;
