const mysqlConnection = require("../connection");

module.exports = {
  loadQuestions: (req, res) => {
    mysqlConnection.query("SELECT * from questions", (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  },
};
