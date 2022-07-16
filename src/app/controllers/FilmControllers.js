const { mongooseToOBject } = require("../../util/mongoose");
const Film = require("../models/Film");
const Review = require("../models/Review")


class FilmControllers {

   // /films/:slug
    show(req, res, next){
        Film.findOne({slug: req.params.slug})
            .then(film => {
                
                // Review.find({})
                //     .then(reviews=> 

                //     {
                //              res.render('films/show', {
                //              reviews : mutipleMongooseToObject(reviews), film: mongooseToOBject(film)
                //              })
                //         }
                //     )

                res.render('films/show', {film: mongooseToOBject(film)})
            })
            .catch(next)
       // res.send('FILM DETAIL -' + req.params.slug)
    }

    index(req, res, next) {
        res.render('home');
    }

    // create(req, res, next) {
    //     Review.findOne({slug: req.params.slug})
    //         .then(review=> {
    //             res.render('create')
    //         })

    // }
    create(req, res, next) {
        res.render('create')
    
    }

    store(req, res, next) {
       res.json(req.body)
    
    }

}

module.exports = new FilmControllers();
