const { query } = require("../dbconnection");
const { handleError, badRequest } = require("../utils/extend");

exports.addTransactionMapping = async (req, res) => {
  console.log("Adding transaction mapping");
  const body = req.body;

  try {
    if (!body.buyer_id || !body.seller_id || !body.furniture_id || !body.start_time || !body.end_time || !body.payment_id) {
      const err = new Error("Missing required fields");
      badRequest(err,res);
      throw err;
    }

    const result = await query(`
      INSERT INTO tblt_buyer_seller_transaction_mapping 
        (buyer_id, seller_id, furniture_id, start_time, end_time, payment_id)
      VALUES 
        (${body.buyer_id}, ${body.seller_id}, ${body.furniture_id}, '${body.start_time}', '${body.end_time}', ${body.payment_id})
    `);

    res.status(200).send(result); // Send response with the result of the query
  } catch (error) {
    handleError(error, res);
  }
};