const { Router } = require("express");
const { listSubmittedJudgeStatus } = require("../../../../services/list");

const route = Router();

route.get("/:problemName/:codeName", (req, res, next) => {
  if (!req.params.problemName) {
    res.status(400).send("No Problem Name");
    return;
  }

  if (!req.params.codeName) {
    res.status(400).send("No Code Name");
    return;
  }

  const { problemName, codeName } = req.params;

  listSubmittedJudgeStatus({
    problemName,
    codeName,
  }).then(
    (judgeStatus) => res.json(judgeStatus),
    (err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  );
});

module.exports = route;
