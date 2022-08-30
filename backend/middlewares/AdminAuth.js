const { verifyAdminToken } = require("../utils/token")

const AdminAutheticate = (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        res.status(403).json({ error: "Not authorized" })
        return
    }

    const token = authorization.split(" ")[1]
    try {
        const admin = verifyAdminToken(token)
        req.admin = admin
        next()
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = {
    AdminAutheticate
}