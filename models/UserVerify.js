const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;
const UserSchema = require("./User");

const userVerifySchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("usersVerify", userVerifySchema);
