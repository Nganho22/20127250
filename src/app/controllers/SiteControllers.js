const Film = require('../models/Film')
//const Review = require('../models/Review')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteControllers {
    index(req, res, next) {
        Film.find({})
            .then(films=> 

                {
                    res.render('home', {
                        films : mutipleMongooseToObject(films)
                    })
                }
            )
            .catch(next)
    }
    // index2(req, res, next) {
    //     Review.find({})
    //         .then(reviews=> 

    //             {
    //                 res.render('home', {
    //                     films : mutipleMongooseToObject(reviews)
    //                 })
    //             }
    //         )
    //         .catch(next)
    // }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
