const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: { type: String, unique: true, required: true, dropDups: true },
  credits: Number,
  name: String,
  description: Array,
  image: String
});

mongoose.model("products", productSchema);
