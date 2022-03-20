const { Router } = require("express");

const route = Router();

route.use("/problem", require("./problem"));
route.use("/verify", require("./verify"));

route.get("/", (req, res, next) => {
  res.send("OK");
});

module.exports = route;
