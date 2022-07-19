const { handleCreateCategory, handleGetAllCategories } = require('../controllers/categoryController')

const router = require('express').Router()

router.post('/', handleCreateCategory)
router.get('/', handleGetAllCategories)

module.exports = router