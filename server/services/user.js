const { query } = require("../dbconnection");
const { handleError, badRequest, validateAndGetUserIdFromAccessToken } = require("../utils/extend");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  try {
    if (!body.name || !body.password || !body.email_id) {
      const err = new Error("Name, password and email are mandatory");
      badRequest(err, res);
      throw err;
    }
    const userExists = await query(
      `SELECT id FROM ${userTable} WHERE email_id = '${body.email_id}'`
    );
    if (userExists.length) {
      res.status(409).send({ message: "User already exists" });
    }
    const encode = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(body.password, encode);

    const result =
      await query(`INSERT INTO ${userTable} (name, logo_url, email_id, password, phone_number, city, address)
        VALUES (
        '${body.name}',
        '${body.logo_url || ""}',
        '${body.email_id}',
        '${hashPassword}',
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
  try {
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if(userId) {
      const body = req.body;
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
  
      await query(`UPDATE ${userTable} SET 
          logo_url = '${body.logo_url || user.logo_url || null}', 
          phone_number = '${body.phone_number || user.phone_number || null}',
          city = '${body.city || user.city || null}',
          address = '${body.address || user.address || null}'
          WHERE id = ${user.id};
       `);
      res.status(200).send("user update success");
    }
  } catch (error) {
    handleError(error, res);
  }
};
