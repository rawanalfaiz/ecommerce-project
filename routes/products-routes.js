const express        = require('express');
const productRouter  = express.Router();
const Product        = require("../models/product");

/* GET all the products page. */
productRouter.get('/products-list', (req, res, next) => {

    Product.find()
    .then( responseFromDB => {
        res.render('products-list', {products: responseFromDB});//products is a key that can be named anything , however I need to use the same key name on the relater hbs file
    })
    .catch( error => {
        console.log("Error while display products" , error);
    })
});


/* GET single products page. */
productRouter.get('/single-product/:id', (req, res, next) => {
    Product.findById(req.params.id)
    .then( responseFromDB => {
        res.render('single-product', {singleProduct: responseFromDB});//products is a key that can be named anything , however I need to use the same key name on the relater hbs file
    })
    .catch( error => {
        console.log("Error while display this product" , error);
    })
});

module.exports = productRouter;
