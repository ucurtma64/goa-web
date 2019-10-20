const mongoose = require("mongoose");

const Post = mongoose.model("posts");

module.exports = app => {
  app.get("/api/posts", async (req, res) => {
    const posts = await Post.find({});

    console.log("posts");
    console.log(posts);

    res.send(posts);
  });
};
