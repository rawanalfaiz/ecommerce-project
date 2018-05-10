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
      productBrand: null,
      description: "Ring in platinum with diamonds and an emerald.",
      productPrice: 15000,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Rings",
      productSub2Ctegory: null,
      productPicture: "/images/products/ring.png"
    },
    {
      productName: "Pendants",
      productBrand: null,
      description: "18k gold",
      productPrice: 1500,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Necklaces&Pendants",
      productSub2Ctegory: null,
      productPicture: "/images/products/pendant.png"
    },
    {
      productName: "Bracelet",
      productBrand: null,
      description: "18k gold and Fits wrists up to 6.25 inches ",
      productPrice: 750,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Bracelets",
      productSub2Ctegory: null,
      productPicture: "/images/products/bracelet.png"
    }, 
    {
      productName: "Earrigs",
      productBrand: null,
      description: "Platinum with freshwater cultured pearls and round brilliant diamonds",
      productPrice: 8000,
      rating: null,
      productCtegory: "Women",
      productSub1Ctegory: "Earrigs",
      productSub2Ctegory: null,
      productPicture: "/images/products/earrings.png"
    },
    {
      productName: "Cuff Links",
      productBrand: null,
      description: "Black titanium cuff links",
      productPrice: 2200,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "CuffLinks",
      productSub2Ctegory: null,
      productPicture: "/images/products/cufflinks.png"
    },  
    {
      productName: "Bracelet",
      productBrand: null,
      description: "Leather and sterling silver. Fits wrists up to 6.25 inches",
      productPrice: 450,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "Bracelets",
      productSub2Ctegory: null,
      productPicture: "/images/products/men-bracelet.png"
    },
    {
      productName: "Ring",
      productBrand: null,
      description: "Wedding band ring in platinum. 4.5mm wide. ",
      productPrice: 3000,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "Ring",
      productSub2Ctegory: null,
      productPicture: "/images/products/men-ring.png"
    },
    {
      productName: "Watch",
      productBrand: null,
      description: "Men's watch in stainless steel. White soleil dial features gold poudré numerals. 40 mm case. Self-winding mechanical movement. Power reserve 42 hours. Water resistant to 100 meters/330 feet/10 ATM. Swiss-made. ",
      productPrice: 12000,
      rating: null,
      productCtegory: "Men",
      productSub1Ctegory: "Watchs",
      productSub2Ctegory: null,
      productPicture: "/images/products/watch1.png"
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
