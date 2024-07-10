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
const HomeRouter = require('./routes/home.route')
app.use('/',HomeRouter)


// Setting port
const port = process.env.PORT || 6000



app.listen(port,()=>{
    console.log(`Server is running with http://localhost:${port}`)
})