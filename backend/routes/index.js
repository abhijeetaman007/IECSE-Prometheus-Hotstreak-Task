const express = require("express");
const addquestion = require("./addquestion");
const question = require("./questions");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

router.get("/questions", question.loadQuestions);
router.post("/addquestion", addquestion.addQuestion);

module.exports = router;
