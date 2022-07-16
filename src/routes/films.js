const express = require('express')
const router = express.Router()

const filmControllers = require('../app/controllers/FilmControllers');
//const reviewControllers = require('../app/controllers/FilmControllers')

router.get('/:slug/create', filmControllers.create)
router.post('/store', filmControllers.store)
router.get('/:slug', filmControllers.show)
router.get('/', filmControllers.index)

module.exports = router;
