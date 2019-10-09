const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const billingSchema = new Schema({
  identityNumber: String,
  registrationAddress: String,
  city: String,
  country: String
});

mongoose.model("billing", billingSchema);
