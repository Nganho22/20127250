
const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const Review = require('./Review')


const Film = new Schema({

    title: { type: String, required: true },
    //name: { type: String, maxLength: 255 },
    description: { type: String },
    img: { type: String },
    trailer: { type: String },
    score: { type: Number },
    //image: { type: String, maxLength: 255 }, 
    slug: { type: String, slug: 'title', unique: true },
}, {
    timestamps: true,
    //createdAt: { type: Data, default: Date.now },
    //updatedAt: { type: Data, default: Date.now },
})

// const Review = new Schema({
//     noidung: {type: String, maxLenght: 600},
//     image: { type: String, maxLength: 255 }, 
//     ava: { type: String, maxLength: 255 },
//     ngdang: { type: String, maxLength: 255 },
//     idphim: {type: String, maxLenght: 3},
// })

module.exports = mongoose.model('Film', Film)
//module.exports = mongoose.model('Review', Review)
