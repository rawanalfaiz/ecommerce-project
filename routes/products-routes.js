const express        = require('express');
const productRouter  = express.Router();
const Product        = require("../models/product");

/* GET home page. */
productRouter.get('/products-list', (req, res, next) => {
    Product.find()
    .then( responseFromDB => {
        res.render('products-list', {products: responseFromDB});//products is a key tht can benamed anything , however I need to use the same key name on the relater hbs file
    })
    .catch( error => {
        console.log("Error while display products" , error);
    })
});

module.exports = productRouter;
