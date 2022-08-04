
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
    show(req, res,next) {
        Review.findOne({slug: req.params.slug})
            .then(review => {
                res.render('review/show', {
                    review: mongooseToOBject(review)
                })
            })
            .catch(next)
    }

    async store(req, res, next)
    {
        try{
            const review = new Review(req.body)
            const savereview = await review.save()
            return res.json({
                status: 'OK',
                elements: savereview
            })

        }
        catch(err){
            next(err)
        }
    }
}

module.exports = new ReviewControllers();
