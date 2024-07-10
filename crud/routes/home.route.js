const express = require('express')
const router = express.Router()

// Import controller
const HomeController = require('../controllers/client/HomeController')

// Get Home Page
router.get('/',HomeController.GetHomePage)


module.exports = router