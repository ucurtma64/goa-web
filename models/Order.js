const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const orderSchema = new Schema({
  conversationId: String,
  paymentId: String,
  items: String,
  status: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date
});

mongoose.model("orders", orderSchema);
