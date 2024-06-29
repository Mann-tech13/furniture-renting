const router = require("express").Router();
const { getUser } = require('../services/user')

router.get('/:id', getUser)

module.exports = router;