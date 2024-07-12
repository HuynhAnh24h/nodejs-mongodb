const express = require('express')
const router = express.Router()

// Import controller
const ContactController = require('../../controllers/client/ContactController')

// Get Home Page
router.get('/',ContactController.GetContactPage)


module.exports = router