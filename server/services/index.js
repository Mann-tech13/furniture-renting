const { query } = require("../dbconnection");

exports.homePage = (req, res) => {
  try {
    query('SELECT 1 AS "1"');
    res.status(200).send("Home Page");
  } catch (error) {
    handleError(error, res);
  }
};
