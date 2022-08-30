const Product = require("../models/Product")
const path = require("path")
const { unlink, open } = require("fs/promises")

// const DOMAIN = "http://localhost:7000/uploads/"

const handleCreateProduct = async (req, res) => {
    const { name, description, price, quantity, category, image } = req.body
    // const { image } = req.files
    // const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"]

    // Check if image was sent
    if(!image) {
        res.status(400).json({ error: "Image is required!" })
        return
    }

    // Check if the fields are empty
    if(!name || !description || !price || !quantity || !category) {
        res.status(400).json({ error: "Name, description, price, quantity and category are required!" })
        return
    }

    try {
        const product = await Product.create({ ...req.body })
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleEditProduct = async (req, res) => {
    const {id} = req.params

    // CHECK IF PRODUCT EXISTS
    const product = await Product.findById(id)

    if(!product) {
        res.status(404).json({ error: "Product not found" })
        return
    }

    // Check if the fields are empty

    try {
        const newProduct = await Product.findByIdAndUpdate(id, { ...product, ...req.body})
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleGetAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category")
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleDeleteProduct = async (req, res) => {
    const id = req.params.id

    try {
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json(product)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}

module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleDeleteProduct,
    handleEditProduct
}