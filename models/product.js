const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const productSchema = new Schema(
{
  productName: String,
  productBrand: String,
  description: String,
  peoductPrice: Number,
  rating: Number,
  productCtegory: String,
  productSub1Ctegory: String,
  productSub2Ctegory: String,
  productPicture: String
},  
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;


// BY CATEGORY
// Women//
// Necklaces & Pendants *
// Bracelets *
// Rings *
// Earrings * 
// Men//
// Cuff Links*
// Bracelets*
// Rings*
// watches*