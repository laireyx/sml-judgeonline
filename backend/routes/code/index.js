const { Router } = require("express");
const { readSubmittedCode } = require("../../services/read-code");

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

  readSubmittedCode({
    problemName,
    codeName,
  }).then(
    (codeText) => res.send(codeText),
    (err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  );
});

module.exports = route;
