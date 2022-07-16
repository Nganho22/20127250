const { mongooseToOBject } = require("../../util/mongoose");
const Film = require("../models/Film");

class FilmControllers {

   // /films/:slug
    show(req, res, next){
        Film.findOne({slug: req.params.slug})
            .then(film => {
                res.render('films/show', {film: mongooseToOBject(film)})
            })
            .catch(next)
       // res.send('FILM DETAIL -' + req.params.slug)
    }

    index(req, res, next) {
        res.render('home');
    }
    create(req, res, next) {
        res.render('create')
    }
}

module.exports = new FilmControllers();
