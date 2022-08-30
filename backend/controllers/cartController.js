const Cart = require("../models/Cart")

const handleAddToCart = async (req, res) => {
    const { product, quantity } = req.body

    if(!req.user) {
        res.status(403).json({ error: 'Not authorized' })
        return
    }

    if(!product) {
        res.status(403).json({ error: 'Product is required' })
        return
    }

    const cartItem = {
        product,
        user: req.user._id,
        quantity
    }

    try {
        const cart = await Cart.create(cartItem)
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const handleDeleteCartItem = async (req, res) => {
    const { id } = req.params
    try {
        const cartItem = await Cart.findByIdAndDelete(id);
        res.status(200).json(cartItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const handleGetCartItem = async (req, res) => {
    const { id } = req.params
    try {
        const cartItem = await Cart.find({ user: id });
        res.status(200).json(cartItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const handleGetAllCartItem = async (req, res) => {
    try {
        const cartItem = await Cart.find();
        res.status(200).json(cartItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    handleAddToCart,
    handleDeleteCartItem,
    handleGetCartItem,
    handleGetAllCartItem
}