const { Router } = require("express");

const route = Router();

route.use("/status", require("./status"));
route.use("/code", require("./code"));

module.exports = route;
