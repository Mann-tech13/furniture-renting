const router = require("express").Router();
const { homePage } = require('../services/index')

router.get('/', homePage)

module.exports = router;