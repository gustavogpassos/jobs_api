const { Router } = require('express')

const usersRouter = Router()
const controller = require('./../controllers/usersController')

usersRouter.post('/create', controller.create)
usersRouter.get('/:id', controller.getUserById)

module.exports = usersRouter
