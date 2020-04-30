const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var routes = require("./routes");
const server = require("http").Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);
const port = process.env.PORT || 3000;
server.listen(port, (err) => {
  console.log(err || `Listening on port ${port}`);
});
