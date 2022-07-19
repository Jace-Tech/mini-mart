const Category = require("../models/Category")

const handleCreateCategory = async (req, res) => {
    const  { category } = req.body

    try {
        const _category = await Category.create({ category })
        res.status(201).json(_category)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const handleGetAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


module.exports = {
    handleCreateCategory,
    handleGetAllCategories
}