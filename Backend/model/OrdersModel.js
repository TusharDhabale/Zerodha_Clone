const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  mode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const OrdersModel = mongoose.model("Orders", ordersSchema);

module.exports = { OrdersModel };
