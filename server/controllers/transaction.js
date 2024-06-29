const router = require("express").Router();
const {
    addTransactionMapping
} = require("../services/transaction");

router.post("/add", addTransactionMapping);

module.exports = router;