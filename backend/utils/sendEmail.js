const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    //service: process.env.SMPT_SERVICE,
    service:"gmail",
    auth: {
      //user: process.env.SMPT_MAIL,
      //pass: process.env.SMPT_PASSWORD,
      user: "abitempabi@gmail.com",
      pass: "bxbuerkrneguyole",
    },
  });

  const mailOptions = {
    //from: process.env.SMPT_MAIL,
    from:"",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;