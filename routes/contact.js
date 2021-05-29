const express = require('express');
const router = express.Router();
const contact_controller =  require('../controllers/contactController');

router.post('/', contact_controller.contact_create);

module.exports = router;