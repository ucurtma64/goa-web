const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;
const BillingSchema = require("./Billing");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  googleId: {
    type: String,
    required: false,
    index: true,
    unique: true,
    sparse: true
  },
  email: { type: String, required: true, index: true, unique: true },
  username: { type: String, required: true, index: true, unique: true },
  password: { type: String, required: true },
  credits: { type: Number, default: 0 },
  billing: BillingSchema,
  role: { type: String, default: "user" },
  minecraftUsername: String,
  verified: Boolean
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
