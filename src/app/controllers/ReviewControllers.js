
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToOBject } = require('../../util/mongoose')
const Review = require('../models/Review')


class ReviewControllers {
    index(req, res, next) {
        Review.find({})
            .then(reviews=> 

    
                    res.json(reviews))
        
            .catch(next)
    }
    show(req, res) {
        res.send('New Detail');
    }
}

module.exports = new ReviewControllers();
