const express = require('express')
const router = express.Router()

// Import controller
const DashboardController = require('../../controllers/admin/DashboardController')

// Get Home Page
router.get('/',DashboardController.GetDashBoard)


module.exports = router