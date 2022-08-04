
const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const Review = new Schema({
    filmID : { type: Schema.Types.ObjectId, ref: 'Film' },
    userID: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, default: ''},
    like: { type: Number},
    slug: { type: String, slug: 'title', unique: true}, 
}, {
    timestamps: true,
})



module.exports = mongoose.model('Review', Review)

