const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: { type: Number, unique: true, required: true, dropDups: true },
  credits: Number,
  name: String,
  description: String,
  image: String
});

mongoose.model("products", productSchema);
