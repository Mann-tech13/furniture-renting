const router = require("express").Router();
const { updateWishlist } = require("../services/wishlist");

router.put("/", updateWishlist);

module.exports = router;
