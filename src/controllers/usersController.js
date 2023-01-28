const { v4: uuid } = require('uuid')

const userEntity = require('./../models/usersModel')

exports.create = (req, res) => {
    const { name, cpf, email, password, type, companyId } = req.body

    const newUser = {
        _id: uuid(),
        name,
        cpf,
        email,
        password,
        type,
    }

    if (companyId) {
        newUser.companyId = companyId
    }

    userEntity.create(newUser, (err, data) => {
        if (err) {
            res.status(400).json(err.message)
        } else {
            res.status(201).json(newUser)
        }
    })
}

exports.getUserById = (req, res) => {
    console.log('get user by id')
    const { id } = req.params

    userEntity.findById(id, (err, data) => {
        if (err) {
            res.status(400).json(err)
        }
        res.status(200).json(data)
    })
}
