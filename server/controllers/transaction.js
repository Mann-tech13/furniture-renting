const router = require("express").Router();
const {
  addTransactionMapping,
  getTransactions,
} = require("../services/transaction");

router.get("/", getTransactions);
router.post("/add", addTransactionMapping);

module.exports = router;
