const jwt = require('jsonwebtoken')

const generateAccessToken = (user) => {
    const token = jwt.sign({user}, process.env.TOKEN_ACCESS, { expiresIn: "7d" })
    return token
}

module.exports = {
    generateAccessToken
}