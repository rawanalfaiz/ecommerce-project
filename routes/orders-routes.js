const express       = require('express');
const orderRouter   = express.Router();
const User          = require("../models/user");//model decleration 
const Product       = require("../models/product");//model decleration 



//CART ROUTE==============================
//adding single product
orderRouter.post('/addToCart', (req, res, next) => {
    console.log(req.user)
    User.findById(req.user._id)
    .then((responseFromDB) => {
        responseFromDB.shoppingCart.push(req.body.productId)
        responseFromDB.save()
        .then((responseFromDB) =>{
            res.redirect('/products-list')
        })
    })
    .catch( error => {
        console.log("Error while display celebrities " , error);
    })
});
// ==========================================
//view shopping cart=======================
orderRouter.get('/view-order',(req, res, next) => {
    const arrProduts = [];
    req.user.shoppingCart.forEach(productId => {
        Product.findById(productId)
        .then((responseFromDB) => {
            arrProduts.push(responseFromDB)
        })
        .then((x)=> {
            console.log(arrProduts);
            res.render('view-order', {orderProduct : arrProduts })
        })
        .catch( error => {
            console.log("Error while display celebrities " , error);
        })
    });
});

//========================================

/* GET home page. */
orderRouter.get('/', (req, res, next) => {
    Celebrity.find()
    .then( responseFromDB => {
        // responseFromDB => { console.log(responseFromDB);}
        // const celebrities = responseFromDB;// this is eaqel to the one below
        res.render('celebrities/list-view', {celebrities: responseFromDB});
    })
    .catch( error => {
        console.log("Error while display celebrities " , error);
    })
});





// orderRouter.post('/clebrities/add-new', (req, res, next) => {
//     res.render("celebrities/new-view")
// })

// ordersRouter.post('/user-account', (req, res, next) => {
//     // userId: {type: Schema.Types.ObjectId, ref: 'User'}, 
//     // productsPerOder: [{type: Schema.Types.ObjectId, ref: 'Product'}],
//     // orderDate: Date,

//     const newOrder = new Order({
//         userId:req.user_id,
//         orderDate: 01/01/1018, //it should  generate todays date
//         orderTrackingNumber: 5768795895, //it should  generate random number
//         productsPerOder: req.user.shoppingCart,
//         // orderTotalAmount: //avarable that generated by looping the shoping cart and added all the prices
//     })

//     newOrder.save()
//     .then(() => {
//         res.redirect('/celebrities');
//     })
//     .catch(err => {
//         console.log("Error while saving: ", err);
//     })
// })

// //edit 

// orderRouter.get('/edit/:id', (req, res, next) => {
//     const celebId = req.params.id;
//     // console.log(celebId);
//     Celebrity.findById(celebId)
//     .then(celebrityFromDB => {
//         res.render("celebrities/edit-view", {celebrity: celebrityFromDB})
//     })
// })

// orderRouter.post('/update/:id', (req, res, next) => {
//     const celebId = req.body.id;
//     const editedName = req.body.editedName;
//     const editedOcc = req.body.editedOccupation;
//     const editedCP = req.body.editedCatchPhrase;

//     console.log('editedName');

//     Celebrity.findByIdAndUpdate(celebId, {
//         name: editedName,
//         occupation: editedOcc,
//         catch_phrase: editedCP
//     })
//     .then(() => {
//         res.redirect(`/celebrities/${celebId}`)
//     })
//     .catch( error => {
//         console.log("Error while updating: ", error)
//     })
// })


// orderRouter.post('/:theId/delete', (req, res, next) => {
//     const celebId = req.body.theId;
//     Celebrity.findByIdAndRemove(celebId)
//     .then(() => {
//         res.redirect("/celebrities");
//     })
//     .catch( error => {
//         console.log("error while deleteing: " , error)
//     })

// })

// orderRouter.get('/:theId', (req, res, next) => {
//     const celebId = req.params.theId;
//     console.log(celebId);
//     Celebrity.findById(celebId)
//     .then(oneCelebrityFromDB => {
//         console.log(oneCelebrityFromDB);
//         res.render('celebrities/details-view', {celebrity: oneCelebrityFromDB})
//     })
//     .catch( error => {
//         console.log("Error while display celebrities 2", error);
//     })

// });



module.exports = orderRouter;