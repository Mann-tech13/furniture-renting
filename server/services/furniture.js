const { query } = require("../db/dbconnection");
const { furnitureTable } = require("../db/tables");
const { handleError, badRequest } = require("../utils/extend");

exports.getFurniture = async (req, res) => {
    const params = req.params;
    try {
      if (!params.id) {
        const err = new Error("ID not found");
        badRequest(err);
        throw err;
      }
      const result = await query(`SELECT * FROM ${furnitureTable} WHERE id = '${params.id}'`);
      res.status(200).send(result);
    } catch (error) {
      handleError(error, res);
    }
  };

exports.getFurnitureList = async (req, res) => {
  const queryParams = req.query;
  var categoryIds = queryParams.categoryIds;
    try {
        if (!queryParams.id) {
          const err = new Error("ID not found");
          badRequest(err,res);
          throw err;
        }
        if(!categoryIds){
          categoryIds = '1,2,3,4,5,6,7,8'
        }
      const result = await query(`SELECT * FROM ${furnitureTable} WHERE owner_user_id <> ${queryParams.id} and category_id in (${categoryIds})`);
      res.status(200).send(result);
    } catch (error) {
      console.log(error)
      handleError(error, res);
    }
  };

exports.addFurniture = async (req, res) => {
  try {
    const body = req.body;
    const accessTokenSplit = req.headers.authorization;
    const accessToken = accessTokenSplit.split(" ")[1];
    const userId = validateAndGetUserIdFromAccessToken(accessToken);
    if (userId) {
      const pictures = body.pictures ? JSON.stringify(body.pictures) : null;

      const result = await query(`INSERT INTO ${furnitureTable} 
            (name, description, pictures, rental_price, owner_user_id, category_id)
            VALUES 
            ('${body.name}', 
            '${body.description}', 
            '${pictures}', 
            ${body.rental_price}, 
            ${body.owner_user_id}, 
            ${body.category_id});`);
      res.status(200).send("Added Successfully!");
    }
  } catch (error) {
    handleError(error, res);
  }
};
