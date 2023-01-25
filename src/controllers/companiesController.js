const companyEntity = require('./../models/companiesModel')
const { v4: uuid } = require('uuid')

const middlewares = require('../middlewares/companiesMiddlewares')

exports.create = async (req, res) => {
    const { cnpj, name, email, phone, address, description } = req.body
    const company = {
        id: uuid(),
        name,
        cnpj,
        email,
        phone,
        address,
        description,
    }

    const alreadyCreated = await middlewares.alreadyExists(company)

    if (alreadyCreated) {
        res.status(400).json({
            message: 'Company already exists',
        })
    } else {
        companyEntity.create(company).then(res.json(company))
    }
}

exports.listAll = async (req, res) => {
    console.log('function listAll')
    res.json(await companyEntity.find())
}

exports.filterById = async (req, res) => {
    console.log(req.params)
    const { id } = req.params
    console.log(id)
    const company = await companyEntity.findById(id)
    res.json(company)
}

exports.search = async (req, res) => {
    var { search } = req.params
    const company = await companyEntity.find({
        $or: [
            { name: { $regex: '.*' + search + '.*' } },
            { email: { $regex: '.*' + search + '.*' } },
        ],
    })
    res.json(company)
}
