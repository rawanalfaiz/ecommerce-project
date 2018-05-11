const express = require('express');
const router  = express.Router();
const nodemailer = require('nodemailer');



/* GET home page */
router.get('/', (req, res, next) => {
  // console.log("hi");
  res.render('index');
});

/* GET contact page */
router.get('/contact', (req, res, next) => {
  res.render('contact');
});

// POST route from contact form using nodemail
router.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
       service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: process.env.GMAIL_USER,
    subject: 'New message from contact form at Quick Rental',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
    html: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    
  };
  smtpTrans.sendMail(mailOpts)
  .then((success)=>{
    
    console.log(success);
    res.redirect('/contact');
  })
  .catch((err)=>{
    console.log(err);
  });
  

});

module.exports = router;
