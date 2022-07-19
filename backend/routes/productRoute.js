const { handleCreateProduct, handleGetAllProducts } = require('../controllers/productController')

const router = require('express').Router()


router.post('/create', handleCreateProduct)
router.get('/', handleGetAllProducts)


module.exports = router