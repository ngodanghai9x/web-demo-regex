const nodemailer = require('nodemailer');
const EMAIL = {
  username: 'ndh.developer@gmail.com',
  password: '!Hai123456'
}
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL.username,
    pass: EMAIL.password,
  }
});

const mailOptions = {
  from: EMAIL.username,
  to: 'myfriend@yopmail.com',
  subject: 'Sending Email using Node.js',
  html: `
  `
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
transporter.sendMail(mailOptions).then(info => console.log('email: ', info.response)).catch(e => console.log) 

