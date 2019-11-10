const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log(request.body)
  response.send({
    data : request.body
  });
});

exports.sendMail = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your@gmail.com',//replace with your email
      pass: 'yourpass'//replace with your password
    }
  });

  var mailOptions = {
    from: 'pururunguwu@gmail.com',//replace with your email
    to: 'dhimas.hary@gmail.com',//replace with your email
    subject: `Contact name: ${req.body.title}`,
    html: `<h1>Contact details</h1>
    <h2> Bos lu ngorder nih  </h2><br>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send('error') // if error occurs send error as response to client
    }
    else {
      res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
    }
  });
  
});



