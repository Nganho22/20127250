const express = require('express');
const router = express.Router();

const newControllers = require('../app/controllers/NewControllers');

//newControllers.index
router.get('/:slug', newControllers.show);
router.get('/', newControllers.index);

module.exports = router;
