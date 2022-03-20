const { Router } = require("express");

const route = Router();

route.use("/problem", require("./problem"));
route.use("/judge", require("./judge"));

route.get("/", (req, res, next) => {
  res.send("OK");
});

module.exports = route;
