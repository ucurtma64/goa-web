const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;
const UserSchema = require("./User");

const userVerifySchema = new Schema({
  userToActivate: UserSchema
});

mongoose.model("usersVerify", userVerifySchema);
