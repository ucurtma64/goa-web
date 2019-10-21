const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireAdmin = require("../middlewares/requireAdmin");

const Post = mongoose.model("posts");

module.exports = app => {
  app.get("/api/posts", async (req, res) => {
    const posts = await Post.find({});

    res.send(posts);
  });

  app.post("/api/posts", requireLogin, requireAdmin, async (req, res) => {
    const body = req.body;

    const post = new Post({
      title: body.title,
      text: body.text,
      author: body.author,
      image: body.image,
      dateSent: Date.now()
    });

    await post.save();

    res.send({});
  });

  app.post("/api/post", async (req, res) => {
    const postId = req.body.postId;

    const result = await Post.findById(postId);

    res.send(result);
  });
};
