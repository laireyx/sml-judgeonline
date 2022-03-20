const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { Router } = require("express");

const { judgeWithNewJudgeCode } = require("../../../services/judge");
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

  const codeText = `use "${config.JUDGE_LIBRARY_DIR}/test_library.sml"; start(); ${req.body.code} finish();`;
  const createdName = `${req.body.name}.${Date.now()}.sml`;
  const problemPath = path.join(config.JUDGE_DIR, req.body.problem);
  const judgeCodePath = path.join(problemPath, createdName);

  writeFile(judgeCodePath, codeText)
    .then(() =>
      judgeWithNewJudgeCode({
        judgeCodePath,
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
