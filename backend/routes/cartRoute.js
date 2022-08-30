const { handleAddToCart, handleDeleteCartItem, handleGetCartItem, handleGetAllCartItem } = require('../controllers/cartController')
const { UserAutheticate } = require('../middlewares/UserAuth')

const router = require('express').Router()

router.get('/', handleGetAllCartItem)
router.get('/:id', handleGetCartItem)
router.post('/add', UserAutheticate, handleAddToCart)
router.delete('/:id', UserAutheticate, handleDeleteCartItem)


// router.get("/", (req, res) => res.send({ message: "CART ENDPOINT" }))


module.exports = router