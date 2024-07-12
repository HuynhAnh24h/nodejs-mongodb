const express = require('express')
const router = express.Router()

// Import controller
const BlogController = require('../../controllers/client/BlogController')

// Get Home Page
router.get('/',BlogController.GetBlogPage)


module.exports = router