const newControllers = require('./news')
const siteControllers = require('./site')

function route(app) {

    app.use('/news', newControllers)
    app.use('/', siteControllers)
}

module.exports = route