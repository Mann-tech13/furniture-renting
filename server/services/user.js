const Joi = require("joi");
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
    const result = await query(
      `SELECT * FROM ${userTable} WHERE id = '${params.id}'`
    );
    res.status(200).send(result);
  } catch (error) {
    handleError(error, res);
  }
};

exports.createUser = async (req, res) => {
  const body = req.body;
  try {
    if (!body.name || !body.password || !body.email_id) {
      const err = new Error("Name, password and email are mandatory");
      badRequest(err, res);
      throw err;
    }
    const result =
      await query(`INSERT INTO ${userTable} (name, logo_url, email_id, password, phone_number, city, address)
        VALUES (
        '${body.name}',
        '${body.logo_url || ""}',
        '${body.email_id}',
        '${body.password}',
        '${body.phone_number}',
        '${body.city}',
        '${body.address}'
        );
     `);
    res.status(200).send(result);
  } catch (error) {
    handleError(error, res);
  }
};

exports.updateUser = async (req, res) => {
  const body = req.body;
  try {
    if (!body.name || !body.email_id || body.password) {
      const err = new Error("Name and email are mandatory");
      badRequest(err, res);
      throw err;
    }

    const user = (
      await query(
        `SELECT * from ${userTable} WHERE name = '${body.name}' AND email_id = '${body.email_id}'`
      )
    )[0];

    const result = await query(`UPDATE ${userTable} SET 
        logo_url = '${body.logo_url || user.logo_url || null}', 
        phone_number = '${body.phone_number || user.phone_number || null}',
        city = '${body.city || user.city || null}',
        address = '${body.address || user.address || null}'
        WHERE id = ${user.id};
     `);
    res.status(200).send(result);
  } catch (error) {
    handleError(error, res);
  }
};
