const router = require("express").Router();
const { createUser } = require("../services/user");
const { getUser } = require('../services/user')

router.get('/:id', getUser)
router.post('/add', createUser)

module.exports = router;