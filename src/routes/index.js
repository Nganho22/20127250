const newControllers = require('./news')
const siteControllers = require('./site')
const courseControllers = require('./courses')

function route(app) {
    app.use('/news', newControllers)
    app.use('/course', courseControllers)
    app.use('/', siteControllers)
}

module.exports = route;
