const { Router } = require("express");
const { listAllSubmittedStatus } = require("../../../../services/list");

const route = Router();

route.get("/:problemName", (req, res, next) => {
  if (!req.params.problemName) {
    res.status(400).send("No Problem Name");
    return;
  }

  listAllSubmittedStatus(req.params.problemName).then(
    (judgeStatus) => res.json(judgeStatus),
    (err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  );
});

module.exports = route;
