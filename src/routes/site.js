const express = require('express')
const router = express.Router()

const siteControllers = require('../app/controllers/SiteControllers')

//newControllers.index
router.use('/search', siteControllers.search)

router.use('/', siteControllers.index)

module.exports = router