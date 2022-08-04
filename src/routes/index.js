const reviewControllers = require('./reviews')
const siteControllers = require('./site')
const filmControllers = require('./films')
//const reviewControllers = require('./reviews')
//const reviewControllers = require('./reviews')
//const reviewControllers = require('./reviews')
//const reviewControllers = require('./reviews')

function route(app) {
    app.use('/review', reviewControllers)
    app.use('/film', filmControllers)
   //app.use('/review', reviewControllers)
    app.use('/', siteControllers)
}

module.exports = route;
