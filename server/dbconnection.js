const mysql = require("mysql");

const con = mysql.createConnection(process.env.MYSQL_URI);

con.connect(function (err) {
  if (err) throw err;
  console.log("Db Connected!");
});

function query(query) {
  con.query(query, function (err, result) {
    if (err) {
        console.log('(Error executing query): ', err)
      throw err;
    }
    console.log(`(Executed query): ${query}`);
    console.log(`(Result): ${JSON.stringify(result)}`);
    return result;
  });
}

module.exports = { con, query };
