const express = require('express')
const router = require('./routes/router')

const app = express()

const mongoose = require('./config/database/database')(app)

app.use(express.json())

app.use('/', router)

app.listen(3000)
