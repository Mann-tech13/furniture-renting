const { paymentTransactionDetails, buyerSellTransactionMapping, furnitureTable, userTable } = require("../db/tables");
const { query } = require("../db/dbconnection");
const { handleError, badRequest } = require("../utils/extend");

exports.addTransactionMapping = async (req, res) => {
    const { buyer_id, seller_id, furniture_id, start_time, end_time, transaction_amount, payment_method, status } 
      = req.body;
  
    try {
      // Ensure required fields are present
      if (!buyer_id || !seller_id || !furniture_id || !start_time || !end_time || !transaction_amount || !payment_method || !status) {
        const err = new Error("Missing required fields");
        badRequest(err);
        throw err;
      }
  
      // Begin transaction
      await query("START TRANSACTION");
  
      // Insert payment transaction
      const paymentResult = await query(`
        INSERT INTO ${paymentTransactionDetails} (transaction_amount, payment_method, status)
        VALUES (${transaction_amount}, '${payment_method}', '${status}')
      `);
  
      const paymentId = paymentResult.insertId;
  
      // Insert transaction mapping
      const mappingResult = await query(`
        INSERT INTO ${buyerSellTransactionMapping} 
          (buyer_id, seller_id, furniture_id, start_time, end_time, payment_id)
        VALUES 
          (${buyer_id}, ${seller_id}, ${furniture_id}, '${start_time}','${end_time}', ${paymentId})
      `);
  
      // Commit transaction
      await query("COMMIT");
  
      res.status(200).send({ message: "Transaction mapping added successfully", mappingResult });
    } catch (error) {
      await query("ROLLBACK");
      handleError(error, res);
    }
  };

  exports.getTransactions = async (req, res) => {
    const { id } = req.params;
    try {
      const results = await query(
        `SELECT * FROM ${buyerSellTransactionMapping} AS BuySell INNER JOIN ${paymentTransactionDetails} AS Payment ON BuySell.payment_id = Payment.id INNER JOIN ${furnitureTable} AS Furniture ON Furniture.id = BuySell.furniture_id LEFT JOIN ${userTable} AS User ON User.id = BuySell.seller_id WHERE BuySell.buyer_id = ${id}`
      );
      res.status(200).json(results);
    } catch (error) {
      handleError(error, res);
    }
  };