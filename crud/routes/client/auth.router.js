const express = require('express')
const router = express.Router()

// Import controller
const AuthController = require('../../controllers/auth/Auth')

// Get Home Page
router.get('/',AuthController.GetAuthPage)
router.get('/register',AuthController.GetRegister)


module.exports = router