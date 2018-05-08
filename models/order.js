const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ordertSchema = new Schema(
{
  userId: {type: Schema.Types.ObjectId, ref: 'User'}, 
  productsPerOder: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  orderDate: Date,
  orderTrackingNumber: Number,
  orderTotalAmount: Number
}, 
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Order = mongoose.model("Order", ordertSchema);

module.exports = Order;
