const { handleCreateProduct, handleGetAllProducts, handleDeleteProduct, handleEditProduct } = require('../controllers/productController')
const { AdminAutheticate } = require('../middlewares/AdminAuth')

const router = require('express').Router()

router.get('/', handleGetAllProducts)

router.post('/create', AdminAutheticate, handleCreateProduct)
router.delete('/:id', AdminAutheticate, handleDeleteProduct)

router.put('/:id', AdminAutheticate, handleEditProduct)
router.patch('/:id', AdminAutheticate, handleEditProduct)




module.exports = router