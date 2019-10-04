const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: { type: String, unique: true, required: true, dropDups: true },
  price: Number,
  name: String,
  description: Array,
  category: String
});

mongoose.model("products", productSchema);
