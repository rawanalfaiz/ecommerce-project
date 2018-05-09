const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce-project', {useMongoClient: true})
.then(() => {
  console.log('Connected to Mongo!')
}).catch(err => {
  console.error('Error connecting to mongo', err)
});

const Product  = require("../models/product");


const products = [
    {
      productName: "Ring",
      description: "Ring in platinum with diamonds and an emerald.",
      peoductPrice: 15000,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Rings",
      productSub2Ctegory: null,
      productPicture: "./images/products/ring.png"
    },
    {
      productName: "Pendants",
      description: "18k gold",
      peoductPrice: 1500,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Necklaces&Pendants",
      productSub2Ctegory: null,
      productPicture: "./images/products/pendant.png"
    },
    {
      productName: "Bracelet",
      description: "18k gold and Fits wrists up to 6.25 inches ",
      peoductPrice: 750,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Bracelets",
      productSub2Ctegory: null,
      productPicture: "./images/products/bracelet.png"
    }, 
    {
      productName: "Earrigs",
      description: "Platinum with freshwater cultured pearls and round brilliant diamonds",
      peoductPrice: 8000,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Earrigs",
      productSub2Ctegory: null,
      productPicture: "./images/products/earrigs.png"
    },
    {
      productName: "Cuff Links",
      description: "Black titanium cuff links",
      peoductPrice: 2200,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "CuffLinks",
      productSub2Ctegory: null,
      productPicture: "./images/products/cufflinks.png"
    },  
    {
      productName: "Bracelet",
      description: "Leather and sterling silver. Fits wrists up to 6.25 inches",
      peoductPrice: 450,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "Bracelets",
      productSub2Ctegory: null,
      productPicture: "./images/products/men-bracelet.png"
    },
    {
      productName: "Ring",
      description: "Wedding band ring in platinum. 4.5mm wide. ",
      peoductPrice: 3000,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "Ring",
      productSub2Ctegory: null,
      productPicture: "./images/products/men-ring.png"
    },
    {
      productName: "Watch",
      description: "Men's watch in stainless steel. White soleil dial features gold poudré numerals. 40 mm case. Self-winding mechanical movement. Power reserve 42 hours. Water resistant to 100 meters/330 feet/10 ATM. Swiss-made. ",
      peoductPrice: 12000,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "Watchs",
      productSub2Ctegory: null,
      productPicture: "./images/products/watch1.png"
    },
  ]
  
Product.create(products)
    .then(res => {
        console.log("ok")
    })
    .catch(err => {
        console.log(err)
    }) 

//mongoose.disconnect();
