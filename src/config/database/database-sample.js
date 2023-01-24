//rename this file as database.js

module.exports = (app) => {
    const mongoose = require('mongoose')

    mongoose
        .connect('**mongodb connection string**')
        .then(() => {
            console.log('connected to database')
        })
        .catch((err) => {
            throw err
        })
}
