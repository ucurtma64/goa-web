const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;
const BillingSchema = require("./Billing");

const userSchema = new Schema({
  googleId: String,
  email: String,
  givenName: String,
  familyName: String,
  credits: { type: Number, default: 0 },
  billing: BillingSchema,
  role: { type: String, default: "user" }
});

mongoose.model("users", userSchema);
