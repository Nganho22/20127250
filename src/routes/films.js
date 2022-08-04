const express = require('express')
const router = express.Router()
//const film = require('../app/models/Film')


const filmControllers = require('../app/controllers/FilmControllers');
//const reviewControllers = require('../app/controllers/FilmControllers')
//const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

router.get('/create', filmControllers.create)
//router.get('found-films/:title', filmControllers.findFilmWithName)
//router.post('/store', filmControllers.store)
//router.get('/:id/update', verifyAccessToken, filmControllers.update)
//router.put('/:id',  verifyAccessToken, filmControllers.submit)
router.get('/:slug', filmControllers.show)
router.get('/', filmControllers.index)

module.exports = router;
