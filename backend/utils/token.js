const jwt = require('jsonwebtoken')

const generateAccessToken = (admin) => {
    const token = jwt.sign({admin}, process.env.TOKEN_ACCESS, { expiresIn: "7d" })
    return token
}

const generateAccessTokenUser = (user) => {
    const token = jwt.sign({user}, process.env.TOKEN_ACCESS_USER, { expiresIn: "7d" })
    return token
}

const verifyUserToken = (token) => {
    const { user } = jwt.verify(token, process.env.TOKEN_ACCESS_USER)
    return user
}

const verifyAdminToken = (token) => {
    const { admin } = jwt.verify(token, process.env.TOKEN_ACCESS)
    return admin
}

module.exports = {
    generateAccessToken,
    generateAccessTokenUser,
    verifyUserToken,
    verifyAdminToken
}