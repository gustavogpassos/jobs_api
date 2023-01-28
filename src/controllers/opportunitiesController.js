const { v4: uuid } = require('uuid')
const opportunityEntity = require('./../models/opportunitiesModel')

exports.create = (req, res) => {
    const { title, description, dateEnd, company } = req.body

    const newOpportunity = {
        _id: uuid(),
        title,
        description,
        company,
        dateEnd,
    }

    opportunityEntity.create(newOpportunity, (err, data) => {
        if (err) {
            res.status(400).json(err)
        }
        res.status(201).json(data)
    })
}

exports.getOpportunityById = (req, res) => {
    const { id } = req.params

    opportunityEntity.findById(id, (err, data) => {
        if (err) {
            res.status(400).json(err)
        }
        res.status(200).json(data)
    })
}

exports.search = (req, res) => {
    const { search } = req.body

    opportunityEntity
        .find({
            $or: [
                { title: { $regex: '.*' + search + '.*' } },
                { description: { $regex: '.*' + search + '.*' } },
            ],
        })
        .populate({
            path: 'companies',
            match: { name: $or[{ $regex: '.*' + search + '.*' }] },
        })
        .then((err, data) => {
            console.log(err)
            console.log(data)
        })
}

exports.getAllOpportunities = (req, res) => {
    opportunityEntity
        .find({})
        .populate({
            path: 'companies',
            select: 'name',
        })
        .then((err, data) => {
            if (err) {
                res.status(400).json(err)
            }
            res.status(200).json(data)
        })
}
