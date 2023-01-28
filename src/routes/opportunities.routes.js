const { Router } = require('express')
const opportunitiesRouter = Router()

const controller = require('./../controllers/opportunitiesController')

opportunitiesRouter.post('/create', controller.create)
opportunitiesRouter.get('/:id', controller.getOpportunityById)
opportunitiesRouter.get('/search', controller.search)
opportunitiesRouter.get('/', controller.getAllOpportunities)

module.exports = opportunitiesRouter
