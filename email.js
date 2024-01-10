require ('dotenv').config()
var nodemailer = require('nodemailer');

const Me = process.env.User
const Password = process.env.Password
const Customer = 'nigel.poblete@gmail.com'



var transporter = nodemailer.createTransport({
 host: 'smtp.precisionhomenetworks.com',
 port: 587,
 secure: false, // true for 465, false for other ports
 auth: {
   user: Me, // gmail username
   pass: Password // gmail app generated password
 },
 tls: {
   rejectUnauthorized: false
 }
});

var mailOptions = {
    from: Me,
    to: Customer,
    subject: 'WHAT UP MY TRIGGA',
    text: 'Node js EZZZZZZZZZZZZZ'
   };

   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
   });

