const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  email: { type: String, index: true, unique: true, sparse: true },
  username: String,
  password: { type: String, select: false },
  role: { type: String, default: "user" }
});

userSchema.methods.verifyPassword = async function(password) {
  const compare = await bcrypt.compare(password, this.password);

  if (compare) {
    return true;
  } else {
    return false;
  }
};

mongoose.model("users", userSchema);
