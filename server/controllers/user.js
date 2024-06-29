const router = require("express").Router();
const {
  createUser,
  getUser,
  updateUser,
} = require("../services/user");

router.post("/", createUser);
router.put("/", updateUser);
router.get("/:id", getUser);

module.exports = router;