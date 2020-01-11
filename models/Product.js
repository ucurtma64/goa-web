const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  productId: { type: Number, unique: true, required: true, dropDups: true },
  credits: Number
});

mongoose.model("products", productSchema);
