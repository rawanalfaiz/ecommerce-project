const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ordertSchema = new Schema(
{
  userId: {type: Schema.Types.ObjectId, ref: 'User'}, 
  productsPerOder: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  orderDate: { type: Date, default: Date.now},
  // orderTrackingNumber: Number,
  // orderTotalAmount: Number
}, 
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Order = mongoose.model("Order", ordertSchema);

module.exports = Order;

  //   // userId: {type: Schema.Types.ObjectId, ref: 'User'}, 
  //   // productsPerOder: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  //   // orderDate: Date,
  

  //   const newOrder = new Order({
  //     userId:req.user_id,
  //     orderDate: 01/01/1018, //it should  generate todays date
  //     productsPerOder: req.user.shoppingCart,
  // })

