const { handleCreateCategory, handleGetAllCategories, handleEditCategory, handleDeleteCategory } = require('../controllers/categoryController')

const router = require('express').Router()

router.post('/', handleCreateCategory)
router.get('/', handleGetAllCategories)
router.patch('/:id', handleEditCategory)
router.put('/:id', handleEditCategory)
router.delete('/:id', handleDeleteCategory)

module.exports = router