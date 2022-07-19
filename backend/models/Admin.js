const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
        unique: true,
    },
    password: { 
        type: String,
        required: true,
    },
    pic: { 
        type: String,
        default: "http://localhost:7000/img/user.png"
    }
}, { timestamps: true })

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin