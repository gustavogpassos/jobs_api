const { Router } = require('express')

const usersRouter = Router()
const controller = require('./../controllers/usersController')

usersRouter.post('/create', controller.create)

module.exports = usersRouter
