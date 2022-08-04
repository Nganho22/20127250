const { mongooseToOBject } = require("../../util/mongoose");
const Film = require("../models/Film");


class FilmControllers {

//     update(req,res,next){
//         Film.findById(req.params.id)
//             .then(film => {
//                 res.render('films/update', {film: mongooseToOBject(film)})
//             })
//             .catch(next)
//     }
//         submit(req, res, next) {
//         Film.updateOne({_id: req.params.id}, req.body)
//             .then(() => res.redirect('/me/stored/films'))
//             .catch(next)
//     }
//    // /films/:slug
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
        res.send("HIII")
    
    }

    // store(req, res, next) {
    //    res.json(req.body)
    
    // }

}

module.exports = new FilmControllers();
