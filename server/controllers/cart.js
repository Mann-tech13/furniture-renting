const router = require("express").Router();
const { updatecart } = require("../services/cart");

router.put("/", updatecart);

module.exports = router;
