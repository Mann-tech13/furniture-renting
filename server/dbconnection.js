const mysql = require("mysql");

const con = mysql.createConnection(process.env.MYSQL_URI);

con.connect(function (err) {
  if (err) throw err;
  console.log("Db Connected!");
});

function query(query) {
  return new Promise((resolve, reject) => {
    con.query(query, (err, result) => {
      if (err) {
        console.log('(Error executing query): ', err);
        return reject(err);
      }
      console.log(`(Executed query): ${query}`);
      console.log(`(Result): ${JSON.stringify(result)}`);
      resolve(result);
    });
  });
}

module.exports = { con, query };
