const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection= require("./connection");
const QuestionsRoutes =require("./routes/questions");
const AddquestionRoute =require("./routes/addquestion");
var app = express();
app.use(bodyParser.json());

app.get("/",(req,res) => {
res.send("Hello World!!")
})
app.use("/questions",QuestionsRoutes);
app.use("/addquestion",AddquestionRoute);

app.listen(3000);
