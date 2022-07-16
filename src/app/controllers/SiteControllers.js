const Film = require('../models/Film')
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
        //res.json({
         //   name: 'test'
        //})
        //res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
