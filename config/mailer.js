var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var options = require('./auth').sendgrid;
var mailer = nodemailer.createTransport(sgTransport(options));
var emailSender = {};
emailSender.sendEmail = function (user) {
    console.log(user);
    var email = {
        from: 'do-not-reply@friendlist.com',
        to: user.email,
        subject: 'Welcome '+user.name, // Subject line
        text: 'Hi, welcome ' + user.name+'\n\n\n Regards, Friend List'
    };
    mailer.sendMail(email,function(e,r){
    });
}
module.exports = emailSender;
