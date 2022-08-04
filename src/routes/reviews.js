const express = require('express')
const router = express.Router()

const reviewControllers = require('../app/controllers/ReviewControllers')

//newControllers.index
router.post('/store', reviewControllers.store)
router.get('/:slug', reviewControllers.show)
router.get('/', reviewControllers.index)

module.exports = router
