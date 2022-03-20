const { Router } = require("express");

const { writeSubmittedCode } = require("../../../services/write-code");
const { judgeSubmittedCode } = require("../../../services/judge");

const route = Router();

route.post("/", (req, res, next) => {
  if (!req.body.code) {
    res.status(400).send("No Code");
    return;
  }

  if (!req.body.name) {
    res.status(400).send("No Name");
    return;
  }

  if (!req.body.problemName) {
    res.status(400).send("No Problem Name");
    return;
  }

  writeSubmittedCode(req.body)
    .then(judgeSubmittedCode)
    .then((judgeResult) => res.json(judgeResult))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = route;
