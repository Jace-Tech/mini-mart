const mongoose = require('mongoose')
const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const adminRoute = require('./routes/adminRoute')
const productRoute = require('./routes/productRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')
const cartRoute = require('./routes/cartRoute')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 7000

// EXPRESS MIDDLEWARES
app.use(cors({ origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    createParentPath: true,
    limits: { 
        fileSize: 2 * 1024 * 1024 // 2mb
    }
}))

app.use(express.static('public'))

// ADMIN ROUTES
app.use("/api/admin/auth", adminRoute)

// PRODUCT ROUTE
app.use("/api/products", productRoute)

// CATEGORY ROUTE
app.use("/api/category", categoryRoute)

// USER ROUTE
app.use("/api/user", userRoute)

// CART ROUTE
app.use("/api/cart", cartRoute)



// BACKEND SETUP
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })    
})


// DEFAULT ROUTE
app.get('/', (req, res) => {
    res.send("<h3>Api running...</h3>")
})


