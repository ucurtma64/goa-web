const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;
const BillingSchema = require("./Billing");

const userSchema = new Schema({
  googleId: String,
  email: String,
  username: String,
  password: String,
  credits: { type: Number, default: 0 },
  billing: BillingSchema,
  role: { type: String, default: "user" },
  minecraftUsername: String
});

userSchema.methods.verifyPassword = function(password) {
  return this.password == password;
};

mongoose.model("users", userSchema);
