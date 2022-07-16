
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Film = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 }, 
    slug: {type: String, maxLenght: 255},
    id: {type: String, maxLenght: 3},
    trailerid:{type: String, maxLenght: 255},
    trailers:{type: String, maxLenght: 255},
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
