const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  email: String,
  givenName: String,
  familyName: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
