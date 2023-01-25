const express = require('express')

const companiesRouter = express.Router()

const controller = require('./../controllers/companiesController')

companiesRouter.get('/', controller.listAll)
companiesRouter.get('/:id', controller.filterById)
companiesRouter.get('/search/:search', controller.search)
companiesRouter.post('/create', controller.create)

module.exports = companiesRouter
