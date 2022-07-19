const Admin = require("../models/Admin")
const bcrypt = require("bcrypt")
const { generateAccessToken } = require("../utils/token")

const handleRegisteration = async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400).json({ message: "These fields (name, email, password) are required"})
        return
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const admin = await Admin.create({
            name, email, password: hashedPassword
        })

        res.status(201).json({
            name: admin.name,
            email: admin.email,
            id: admin._id
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleLogin = async (req, res) => {
    const { email, password} = req.body

    try {
        // CHECK IF USER EXISTS
        const admin = await Admin.findOne({ email })

        if(!admin) {
            res.status(404).json({ message: "no admin found" })
            return
        }

        const hashedPassword = admin.password

        if(!bcrypt.compareSync(password, hashedPassword)) {
            res.status(400).json({ message: "Incorrect Password" })
            return
        }

        //  GENERATE TOKEN
        const token = generateAccessToken(admin)

        res.status(200).json({ 
            email: admin.email,
            name: admin.name,
            pic: admin.pic,
            token
        })
        
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    handleRegisteration, 
    handleLogin
}