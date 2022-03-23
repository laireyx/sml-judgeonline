const { Router } = require("express");

const route = Router();

route.use("/problem", require("./problem"));
route.use("/code", require("./code"));

module.exports = route;
