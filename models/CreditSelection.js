const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const creditSelectionSchema = new Schema({
  productId: { type: String, unique: true, required: true, dropDups: true },
  price: Number,
  name: String,
  description: Array,
  credits: Number,
  category: String
});

mongoose.model("creditselection", creditSelectionSchema);
