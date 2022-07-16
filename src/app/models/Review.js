
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Review = new Schema({
    noidung: {type: String, maxLenght: 600},
    image: { type: String, maxLength: 255 }, 
    ava: { type: String, maxLength: 255 },
    ngdang: { type: String, maxLength: 255 },
    idphim: {type: String, maxLenght: 3},
})

module.exports = mongoose.model('Review', Review)
