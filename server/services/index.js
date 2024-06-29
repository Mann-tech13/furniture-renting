const { query } = require("../dbconnection")

exports.homePage = (req,res) => {
    query('SELECT 1 AS "1"')
    res.send('Home Page')
}