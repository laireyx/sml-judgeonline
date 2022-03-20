const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { Router } = require("express");

const { judgeSubmittedCode } = require("../../../services/judge");
const config = require("../../../config");
const writeFile = promisify(fs.writeFile);

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

  if (!req.body.problem) {
    res.status(400).send("No Problem Name");
    return;
  }

  const codeText = req.body.code;
  const createdName = `${req.body.name}.${Date.now()}.sml`;
  const problemPath = path.join(config.SUBMIT_DIR, req.body.problem);
  const submittedCodePath = path.join(problemPath, createdName);

  writeFile(submittedCodePath, codeText)
    .then(() =>
      judgeSubmittedCode({
        submittedCodePath,
        problemName: req.body.problem,
      })
    )
    .then((judgeResult) => res.json(judgeResult))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = route;
