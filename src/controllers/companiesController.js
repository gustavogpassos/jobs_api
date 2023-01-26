const companyEntity = require('./../models/companiesModel')
const { v4: uuid } = require('uuid')

const middlewares = require('../middlewares/companiesMiddlewares')

exports.create = async (req, res) => {
    const { cnpj, name, email, phone, address, description } = req.body
    const company = {
        _id: uuid(),
        name,
        cnpj,
        email,
        phone,
        address,
        description,
    }

    await companyEntity.create(company, (err, data) => {
        if (err) {
            if (err.code === 11000) {
                const key = Object.keys(err.keyPattern)[0]
                res.status(400).json({
                    message: key + ' already registered',
                })
            }
        } else {
            res.status(201).json(company)
        }
    })
}

exports.listAll = async (req, res) => {
    companyEntity.find({}, (err, data) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(data)
        }
    })
}

exports.filterById = async (req, res) => {
    const { id } = req.params
    companyEntity.findById(id, (err, data) => {
        res.status(200).json(data)
    })
}

exports.search = async (req, res) => {
    var { search } = req.params
    companyEntity.find(
        {
            $or: [
                { name: { $regex: '.*' + search + '.*' } },
                { email: { $regex: '.*' + search + '.*' } },
            ],
        },
        (err, data) => {
            res.status(200).json(data)
        }
    )
}
