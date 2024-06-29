const router = require("express").Router();
const { getUser } = require('../services/user')

router.get('/user', getUser)

module.exports = router;