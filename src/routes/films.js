const express = require('express')
const router = express.Router()

const filmControllers = require('../app/controllers/FilmControllers');

router.get('/create', filmControllers.create)
router.get('/:slug', filmControllers.show)
router.get('/', filmControllers.index)

module.exports = router;
