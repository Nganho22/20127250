const express = require('express')
const router = express.Router()

const courseControllers = require('../app/controllers/CourseControllers');

router.get('/create', courseControllers.create)
router.get('/:slug', courseControllers.index)
router.get('/', courseControllers.index)

module.exports = router;
