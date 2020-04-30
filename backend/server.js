const express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const bodyParser = require("body-parser");
const mysqlConnection= require("./connection");
const QuestionsRoutes =require("./routes/questions");
const AddquestionRoute =require("./routes/addquestion");

app.use(bodyParser.json());

app.get("/",(req,res) => {
res.send("Hello World!!")
})
app.use("/questions",QuestionsRoutes);
app.use("/addquestion",AddquestionRoute);

app.listen(3000);
