const { query } = require("../dbconnection");
const { handleError, badRequest } = require("../utils/extend");

const userTable = 'tblm_user_details'
exports.getUser = (req, res) => {
  const body = req.body;
  try {
    if (!body.id) {
      const err = new Error("ID not found");
      badRequest(err);
      throw err;
    }
    const result = query(`SELECT * FROM ${userTable} WHERE id = '${body.id}'`);
    res.status(200).send(result);
  } catch (error) {
    handleError(error, res);
  }
};
