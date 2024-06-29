const { query } = require("../dbconnection");
const { handleError, badRequest } = require("../utils/extend");

const furnitureTable = "tblm_furniture_details";
exports.getFurniture = async (req, res) => {
  console.log('asf')
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
    try {
        if (!queryParams.id) {
          const err = new Error("ID not found");
          badRequest(err);
          throw err;
        }
      const result = await query(`SELECT * FROM ${furnitureTable} WHERE owner_user_id <> ${queryParams.id}`);
      res.status(200).send(result);
    } catch (error) {
      handleError(error, res);
    }
  };

  exports.addFurniture = async (req, res) => {
    console.log("hello world");
    const body = req.body;
      try {
        const pictures = body.pictures ? JSON.stringify(body.pictures) : null;

          const result = await query(`INSERT INTO tblm_furniture_details 
          (name, description, pictures, rental_price, owner_user_id, category_id)
          VALUES 
          ('${body.name}', 
          '${body.description}', 
          '${pictures}', 
          ${body.rental_price}, 
          ${body.owner_user_id}, 
          ${body.category_id});`);
          console.log("added");
          res.status(200).send("Added Successfully !");
        } catch (error) {
          console.log(error)
        handleError(error, res);
      }
    };
  

