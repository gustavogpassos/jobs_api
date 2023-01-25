const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    companyId: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const userEntity = mongoose.model('users', userSchema)

module.exports = userEntity
