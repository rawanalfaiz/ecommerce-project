const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const userSchema = new Schema(
{
  username: { type: String, required: true },
  password: { type: String, required: true },
  userEmail:{ type: String, required: true, lowercase: true, unique: true },
  userFname: String,
  userLname: String,
  birthDate: Date,
  userAddress: {//the addresss is not populating in the database*
    address1: String,
    address2: String,
    city: String,
    state: { type: String, uppercase: true, enum: statesArray},
    zipcode: { type: Number, maxlength: 5 }
  },
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