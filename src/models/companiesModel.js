const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    _id: String,
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    cnpj: {
        type: String,
        require: true,
        unique: true,
    },
    cratedAt: {
        type: Date,
        default: new Date(),
    },
    phone: String,
    description: String,
    address: String,
})

const companyEntity = mongoose.model('companies', companySchema)

module.exports = companyEntity
