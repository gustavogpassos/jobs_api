const mongoose = require('mongoose')

const schema = mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    phone: String,
    cnpj: String,
    cratedAt: {
        type: Date,
        default: new Date(),
    },
    description: String,
    address: String,
})

const companyEntity = mongoose.model('companies', schema)

module.exports = companyEntity
