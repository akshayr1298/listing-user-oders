const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  productName: { type: String, required: true },
  status: { type: String, enum: ["Pending","Delivered"],default: 'Pending' },
},{timestamps:true});

module.exports = mongoose.model("Oders",orderSchema)
