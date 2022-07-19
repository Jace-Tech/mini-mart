const Product = require("../models/Product")

const DOMAIN = "http://localhost:7000/uploads/"

const handleCreateProduct = async (req, res) => {
    const { name, description, price, quantity, category } = req.body
    const { image } = req.files
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"]

    // Check if image was sent
    if(!image) {
        res.status(400).json({ error: "Image is required!" })
        return
    }

    // Check file is an image file
    const imageType = image.mimetype
    if(!allowedTypes.includes(imageType)) {
        res.status(400).json({ error: `"${imageType}" file is not allowed` })
        return
    }

    const imageArr = image?.name?.split(".")
    const ext = imageArr[imageArr.length - 1]
    const imageName = imageArr[0] + `-${new Date(Date.now()).getTime()}.${ext}`

    // Move the image to the upload folder
    image.mv("./public/uploads/" + imageName)

    // Check if the fields are empty
    if(!name || !description || !price || !quantity || !category) {
        res.status(400).json({ error: "Name, description, price, quantity and category are required!" })
        return
    }

    try {
        const product = await Product.create({ ...req.body, image: `${DOMAIN + imageName}` })
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleGetAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    handleCreateProduct,
    handleGetAllProducts
}