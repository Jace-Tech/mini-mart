const bcrypt = require('bcrypt')
const User = require('../models/User')
const { generateAccessTokenUser } = require('../utils/token')

const handleCreateUser = async (req, res) => {
    const { name, password, email } = req.body
    
    // Check if the fields are empty
    if(!name || !password || !email) {
        res.status(400).json({ error: "Name, image, password and email are required!" })
        return
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const user = await User.create({ ...req.body, password: hashedPassword })
        res.status(201).json(user)
    } 
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body

    // CHECK IF USER EXISTS
    try {
        const user = await User.findOne({ email })

        if (!user) {
            res.status(404).json({ error: 'User not found' })
            return
        }

        // CHECK FOR PASSWORD
        if (!await bcrypt.compare(password, user.password)) {
            res.status(400).json({ error: 'Incorrect Password' })
            return
        }

        const token = generateAccessTokenUser(user)
        res.status(200).json({
            email: user.email,
            name: user.name,
            pic: user.pic,
            id: user._id,
            token
        })
    } catch(err) {
        res.status(500).json({ error: err.message })
    } 
}

const handleGetAllUser = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const handleGetOneUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    handleCreateUser,
    handleUserLogin,
    handleGetAllUser,
    handleGetOneUser
}