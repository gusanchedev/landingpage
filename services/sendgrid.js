const config = require("../config");
const sgMail = require("@sendgrid/mail");

function sendMailToContact(newContact) {
  const { name, email, message, date_of_message } = newContact;

  sgMail.setApiKey(config.sendGridApiKey);
  const msg = {
    to: email, // Change to your recipient
    from: config.sendGridVerifiedSender, // Change to your verified sender
    bcc: config.sendGridVerifiedSender,
    subject: "This is Gustavo (Fullstack Developer) from gusanche.dev",
    text: `Hi ${name}.<br>Thanks for your contact via gusanche.dev on ${date_of_message}. I will be glad to help you on your fullstack project, so I will be in contact asap. <br>You wrote:<br><em>${message}</em>`,
    html: `Hi ${name}.<br>Thanks for your contact via gusanche.dev on ${date_of_message}. I will be glad to help you on your fullstack project, so I will be in contact asap. <br>You wrote:<br><em>${message}</em>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendMailToContact;
