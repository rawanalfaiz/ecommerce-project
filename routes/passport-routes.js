const express        = require("express");
const router         = express.Router();
//model decleration 
const User           = require("../models/user");
const Product        = require("../models/product");
const Order          = require("../models/order");
// Bcrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const ensureLogin    = require("connect-ensure-login");
const passport       = require("passport");
const flash          = require("connect-flash"); // https://www.npmjs.com/package/connect-flash
//======================================================

// //check if this person is admin or not==================
// function isAdnim(){
//   return function( req, res, next){
//     if (req.isAuthernticated()&&  req.user.role === "ADMIN"){
//       return next();
//     }else {
//       res.redirect('/')
//     }
//   }
// }
// //check if this person is guest or not==================
// function isGuest(){
//     return function( req, res, next){
//       if (req.isAuthernticated()&&  req.user.role === "GUEST"){
//         return next();
//       }else {
//         res.redirect('/')
//       }
//     }
//   }
//======================================================


//USER SIGNUP ROUTE========================================
router.get("/signup", (req, res, next) => {
  res.render("passport/signup");
});


router.post("/signup", (req, res, next) => {
  console.log(req.body)
  const username    = req.body.username;
  const userFname   = req.body.userFname;
  const userLname   = req.body.userLname;
  const birthDate   = req.body.birthDate;
  const userEmail   = req.body.userEmail;
  const userAddress =  
    {
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode, 
    }  
  const password   = req.body.password;

    if (username === "" || password === "") {
    res.render("passport/signup", { message: "Indicate username and password" });
    return;
  }
  //check if the the name is already exist or not
  User.findOne({ username : username })
  .then((user) => {
    if (user !== null) {
      res.render("passport/signup", { message: "The username already exists" });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({
      username:username,
      password:hashPass,
      userEmail:userEmail,
      userFname:userFname,
      userLname:userLname,
      birthDate:birthDate,
      userAddress:userAddress,
      shoppingCart:[],
      wishList:[],
      userOrders:[],
      })
   .then((theUser)=>{
     res.redirect('/')
    })
    .catch((err)=>{
     console.log(err);
     next(err);
     })
    
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
  
})
//=========================================================================

//USER LOGIN ROUTE==============================================================
router.get("/login", (req, res, next) => {
  res.render("passport/login", { "message": req.flash("somthing went wrong while logging in, try again please!") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

// PRIVATE USER ACCOUNT
router.get("/user-account", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("passport/user-account", { user: req.user });
});
//=========================================================================

//USER SIGN OUT=================================================================
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});
//=========================================================================



module.exports = router;
