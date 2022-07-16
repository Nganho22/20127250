const newControllers = require('./news')
const siteControllers = require('./site')
const filmControllers = require('./films')

function route(app) {
    app.use('/news', newControllers)
    app.use('/film', filmControllers)
    app.use('/', siteControllers)
}

module.exports = route;
