const Contact = require("../models/contact");
const sendMailToContact = require("../services/sendgrid");

exports.contact_create = async function (req, res, next) {
  const contact = new Contact({
    name: req.body.contactName,
    email: req.body.contactEmail,
    message: req.body.contactMessage,
    date_of_message: Date.now(),
  });
  try {
    const newContact = await contact.save();
    sendMailToContact(newContact);
    res.render("contact.njk", newContact);
  } catch (error) {
    next(error);
  }
};
