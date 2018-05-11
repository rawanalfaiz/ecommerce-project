const express       = require('express');
const orderRouter   = express.Router();
const passport      = require("passport");
const User          = require("../models/user");//model decleration 
const Product       = require("../models/product");//model decleration 
const Order         = require("../models/order");//model decleration 



// orderRouter.get("/view-order", (req, res) => {
//     res.render("view-order");
//   });

//CART ROUTE==============================
//========================================
//adding single product
orderRouter.post('/addToCart', (req, res, next) => {
    // console.log(req.user)
    User.findById(req.user._id)
    .then((responseFromDB) => {
        responseFromDB.shoppingCart.push(req.body.productId)
        responseFromDB.save()
        .then((responseFromDB) =>{
            res.redirect('/products-list')
        })
    })
    .catch( error => {
        console.log("Error while display your cart " , error);
    })
});

// ==========================================
//delete single product
// orderRouter.post('/removeFromCart/:id', (req, res, next) => {
//     // console.log("============")
//     // console.log(req.user)
//     // console.log("============")
//     const index = req.user.shoppingCart.indexOf(req.params.id)
//     User.findById(req.user._id)
//     .then((responseFromDB) => {
//         if (index> -1){
//             responseFromDB.shoppingCart.splice(index,1)
//             responseFromDB.save()
//             .then((responseFromDB) =>{
//                 res.redirect('/view-order')
//             })
            
//             .catch( error => {
//                 console.log("Error while display celebrities " , error);
//             })
//         }
//         });
    
// });

//delete single product
// orderRouter.post('/removeFromCart/:id',(req, res, next) => {
//     console.log("============")
//     console.log(req.user)
//     console.log("============")

//     const index = req.user.shoppingCart.indexOf(req.params.id)
//     if (index> -1){
//         req.users.shoppingCart.splice(index,1)
//     }
//            res.render('view-order', {orderProduct : arrProduts })
// });


//view shopping cart=======================
orderRouter.get('/view-order',(req, res, next) => {
    const arrProduts = [];
    console.log(req.user)
    req.user.shoppingCart.forEach(productId => {
        console.log(productId);
        Product.findById(productId)
        .then((responseFromDB) => {
            arrProduts.push(responseFromDB)
        })
        .then((x)=> {
            if(arrProduts.length === req.user.shoppingCart.length){
                // console.log(arrProduts);
                res.render('view-order', {orderProduct : arrProduts })
            }
        })
        .catch( error => {
            console.log("rror while display your cart" , error);
        })
        .catch( error => {
            console.log("rror while display your cart" , error);
        })
    })
});



module.exports = orderRouter;
