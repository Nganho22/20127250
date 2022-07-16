const { mongooseToOBject } = require("../../util/mongoose");
const Film = require("../models/Film");

class FilmControllers {
    index(req, res, next) {
        res.render('home');
    }
    create(req, res, next) {
        res.render('create')
    }
}

module.exports = new FilmControllers();
