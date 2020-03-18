const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection= require("./connection");
const QuestionsRoutes =require("./routes/questions");

var app = express();
app.use(bodyParser.json());

app.get("/",(req,res) => {
res.send("Hello World!!")
})
app.use("/questions",QuestionsRoutes);


app.listen(3000);