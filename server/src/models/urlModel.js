const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema()

module.exports = mongoose.model('Url',urlSchema)