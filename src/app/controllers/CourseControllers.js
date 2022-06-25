const { mongooseToOBject } = require("../../util/mongoose");
const Course = require("../models/Course");

class CourseControllers {
    index(req, res, next) {
        res.render('home');
    }
    create(req, res, next) {
        res.render('create')
    }
}

module.exports = new CourseControllers();
