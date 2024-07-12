const express = require('express')
const router = express.Router()

// Import controller
const TourController = require('../../controllers/admin/TourController')

// Get Home Page
router.get('/',TourController.GetTour)


module.exports = router