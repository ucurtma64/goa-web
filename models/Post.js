const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  text: String,
  author: String,
  image: String,
  dateSent: Date
});

mongoose.model("posts", postSchema);
