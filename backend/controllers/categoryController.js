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

const handleDeleteCategory = async (req, res) => {
    const { id } = req.params

    try {
        const category = await Category.findByIdAndDelete(id)
        res.status(200).json(category)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const handleEditCategory = async (req, res) => {
    const { id } = req.params
    const { category } = req.body

    try {
        if(!category) {
            res.status(400).json({ message: "Please enter a category" })
            return
        }
        const category = await Category.findByIdAndUpdate(id, { category })
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    handleCreateCategory,
    handleGetAllCategories, 
    handleDeleteCategory,
    handleEditCategory
}