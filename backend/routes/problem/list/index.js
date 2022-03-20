const { Router } = require("express");
const { listProblems } = require("../../../services/list");

const route = Router();

route.get("/", (req, res, next) => {
  listProblems().then(
    (problems) => res.json(problems),
    (err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  );
});

module.exports = route;
