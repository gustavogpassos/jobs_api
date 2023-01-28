const mongoose = require('mongoose')

const opportunitySchema = mongoose.Schema({
    _id: String,
    title: {
        type: String,
        required: true,
    },
    company: [
        {
            type: mongoose.Schema.Types.String,
            ref: 'companies',
        },
    ],
    description: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: new Date(),
    },
    dateEnd: {
        type: Date,
        required: true,
    },
})

const opportunityEntity = mongoose.model('opportunities', opportunitySchema)

module.exports = opportunityEntity
