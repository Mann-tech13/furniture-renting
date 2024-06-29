const { query } = require("../db/dbconnection");
const { userTable } = require("../db/tables");
const { handleError, badRequest, validateAndGetUserIdFromAccessToken } = require("../utils/extend");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await query(
      `SELECT * FROM ${userTable} WHERE email_id = '${email}'`
    );
    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }
    const userDetails = user[0];
    console.log(password, userDetails.password);
    const auth = await bcrypt.compare(password, userDetails.password);
    console.log(auth);
    if (!auth) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { userId: userDetails.id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({ message: "Login successful", accessToken });
  } catch (error) {
    handleError(error, res);
  }
};

exports.createUser = async (req, res) => {
  const body = req.body;
  const { name, password, email_id, logo_url, phone_number, city, address } = body
  try {
    if (!name || !password || !email_id) {
      const err = new Error("Name, password and email are mandatory");
      badRequest(err, res);
      throw err;
    }
    const userExists = await query(
      `SELECT id FROM ${userTable} WHERE email_id = '${email_id}'`
    );
    if (userExists.length) {
      res.status(409).send({ message: "User already exists" });
    }
    const encode = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, encode);

    const result =
      await query(`INSERT INTO ${userTable} (name, logo_url, email_id, password, phone_number, city, address)
        VALUES (
        '${name}',
        '${logo_url || ""}',
        '${email_id}',
        '${hashPassword}',
        '${phone_number}',
        '${city}',
        '${address}'
        );
     `);
    res.status(200).send(result);
  } catch (error) {
    handleError(error, res);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if(userId) {
      const { name, password, email_id, logo_url, phone_number, city, address } = body
      if (!name || !email_id || password) {
        const err = new Error("Name and email are mandatory");
        badRequest(err, res);
        throw err;
      }
  
      const user = (
        await query(
          `SELECT * from ${userTable} WHERE name = '${name}' AND email_id = '${email_id}'`
        )
      )[0];
  
      await query(`UPDATE ${userTable} SET 
          logo_url = '${logo_url || user.logo_url || null}', 
          phone_number = '${phone_number || user.phone_number || null}',
          city = '${city || user.city || null}',
          address = '${address || user.address || null}'
          WHERE id = ${user.id};
       `);
      res.status(200).send("user update success");
    }
  } catch (error) {
    handleError(error, res);
  }
};
