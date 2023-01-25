const { v4: uuid } = require('uuid')

const userEntity = require('./../models/usersModel')

exports.create = async (req, res) => {
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

    await userEntity.create(newUser, (err, data) => {
        if (err) {
            res.status(400).json(err.message)
        } else {
            console.log(data)
            res.status(201).json(newUser)
        }
    })
}
