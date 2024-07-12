const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const connectMongoDB = require('./configs/database')

// Connect Mongo DB 
connectMongoDB()

app.set('view engine', 'ejs')
app.set('views', './views');

// Setting Css JS Template 
app.use(express.static(path.join(__dirname, 'public')));

// Using Router

/*========== CLIENT ROUTES ==========*/
const HomeRouter = require('./routes/client/home.route')
const GalleryRouter = require('./routes/client/gallery.route')
const BlogRouter = require('./routes/client/blog.route')
const AboutRouter = require('./routes/client/about.route')
const ContactRouter = require('./routes/client/contact.route')
app.use('/',HomeRouter)
app.use('/gallery',GalleryRouter)
app.use('/blog',BlogRouter)
app.use('/about',AboutRouter)
app.use('/contact',ContactRouter)

/*========== AUTH ROUTES ==========*/
const AuthRouter = require('./routes/client/auth.router')
app.use('/auth',AuthRouter)
app.use('/auth',AuthRouter)

/*========== ADMIN ROUTES ==========*/
const DashboardRouter = require('./routes/admin/dashboard.router')
const TourRouter = require('./routes/admin/tour.router')
app.use('/admin',DashboardRouter)
app.use('/admin/tour',TourRouter)

// Setting port
const port = process.env.PORT || 6000



app.listen(port,()=>{
    console.log(`Server is running with http://localhost:${port}`)
})