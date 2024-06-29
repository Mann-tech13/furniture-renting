const { query } = require("../dbconnection");

exports.homePage = async (req, res) => {
  try {
    await query('SELECT 1 AS "1"');
    res.status(200).send("Home Page");
  } catch (error) {
    handleError(error, res);
  }
};
