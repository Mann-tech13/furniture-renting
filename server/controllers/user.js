const router = require("express").Router();
const { createUser, getUser, updateUser, login } = require("../services/user");

router.post("/login", login);
router.post("/", createUser);
router.put("/", updateUser);
router.get("/:id", getUser);

module.exports = router;
