const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema(
{
  username: { type: String, required: true },
  password: { type: String, required: true },
  userEmail:{ type: String, required: true },
  userFname: String,
  userLname: String,
  birthDate: Date,
  userAddress: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipcode: Number
  },//the addresss is not populating in the database*
  shoppingCart: [{type: Schema.Types.ObjectId, ref: 'Product'}], 
  wishList: [{type: Schema.Types.ObjectId, ref: 'Product'}], 
  userOrders:[{type: Schema.Types.ObjectId, ref: 'Order'}],
  role: { type: String, enum : ['GUEST', 'ADMIN'], default : 'GUEST'}
},
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;