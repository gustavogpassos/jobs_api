const express = require('express')
const companiesRouter = require('./companies.routes')
const usersRouter = require('./users.routes')
const opportunitiesRouter = require('./opportunities.routes')

const router = express.Router()

router.use('/companies', companiesRouter)
router.use('/users', usersRouter)
router.use('/opportunities', opportunitiesRouter)

module.exports = router
