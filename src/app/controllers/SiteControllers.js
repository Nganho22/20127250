const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteControllers {
    index(req, res, next) {
        Course.find({})
            .then(courses=> 

                {
                    res.render('home', {
                        courses : mutipleMongooseToObject(courses)
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
