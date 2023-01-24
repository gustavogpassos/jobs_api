const express = require('express')
const companiesRouter = require('./companies.routes')

const router = express.Router()

router.use('/companies', companiesRouter)

module.exports = router
