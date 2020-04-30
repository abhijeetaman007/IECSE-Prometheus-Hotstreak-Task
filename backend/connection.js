const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected!!");
  } else {
    console.log("Connection Failed");
    console.log(err);
  }
});

module.exports = mysqlConnection;
