const { query } = require("../dbconnection");
const { handleError, badRequest } = require("../utils/extend");

const userTable = "tblm_user_details";
exports.getUser = async (req, res) => {
    const params = req.params;
    try {
      if (!params.id) {
        const err = new Error("ID not found");
        badRequest(err);
        throw err;
      }
      const result = await query(`SELECT * FROM ${userTable} WHERE id = '${params.id}'`);
      res.status(200).send(result);
    } catch (error) {
      handleError(error, res);
    }
  };

exports.createUser = (req, res) => {
  const body = req.body;
  try {
    if (!body.id) {
      const err = new Error("ID not found");
      badRequest(err);
      throw err;
    }
    const result =
      query(`INSERT INTO ${userTable} (name, logo_url, email_id, password, phone_number, city, address, wish_list, cart)
        VALUES (
        'John Doe',
        'http://example.com/logo.jpg',
        'john.doe@example.com',
        'password123',
        '1234567890',
        'New York',
        '123 Main St',
        JSON_ARRAY('item1', 'item2', 'item3'),
        JSON_ARRAY('product1', 'product2')
        );
     `);
    res.status(200).send(result);
  } catch (error) {
    handleError(error, res);
  }
};
