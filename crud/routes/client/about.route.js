const express = require('express')
const router = express.Router()

// Import controller
const AboutController = require('../../controllers/client/AboutController')

// Get Home Page
router.get('/',AboutController.GetAboutPage)


module.exports = router