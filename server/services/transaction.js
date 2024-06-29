const { query } = require("../dbconnection");
const { handleError, badRequest } = require("../utils/extend");

exports.addTransactionMapping = async (req, res) => {
    console.log("Adding transaction mapping");
    const body = req.body;
  
    try {
      // Ensure required fields are present
      if (!body.buyer_id || !body.seller_id || !body.furniture_id || !body.start_time || !body.end_time || !body.transaction_amount || !body.payment_method || !body.status) {
        const err = new Error("Missing required fields");
        badRequest(err);
        throw err;
      }
  
      // Begin transaction
      await query("START TRANSACTION");
  
      // Insert payment transaction
      const paymentResult = await query(`
        INSERT INTO tblm_payment_transaction_details (transaction_amount, payment_method, status)
        VALUES (${body.transaction_amount}, '${body.payment_method}', '${body.status}')
      `);
  
      const paymentId = paymentResult.insertId;
  
      // Insert transaction mapping
      const mappingResult = await query(`
        INSERT INTO tblt_buyer_seller_transaction_mapping 
          (buyer_id, seller_id, furniture_id, start_time, end_time, payment_id)
        VALUES 
          (${body.buyer_id}, ${body.seller_id}, ${body.furniture_id}, '${body.start_time}','${body.end_time}', ${paymentId})
      `);
  
      // Commit transaction
      await query("COMMIT");
  
      res.status(200).send({ message: "Transaction mapping added successfully", mappingResult });
    } catch (error) {
      await query("ROLLBACK");
      handleError(error, res);
    }
  };