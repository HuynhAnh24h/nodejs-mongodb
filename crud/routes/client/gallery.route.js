const express = require('express')
const router = express.Router()

// Import controller
const GalleryController = require('../../controllers/client/GalleryController')

// Get Home Page
router.get('/',GalleryController.GetGalleryPage)


module.exports = router