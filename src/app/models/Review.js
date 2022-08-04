
const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const Review = new Schema({
    content: {type: String},
    filmname: {type: String},
    like: {type: Number},
    userava: {type: String},
    username: {type: String},
    filmid: {type: String}
},{
    timestamps: true,
})

module.exports = mongoose.model('Review', Review)

