const { Router } = require("express");

const route = Router();

route.use("/status", require("./status"));
route.use("/submit", require("./submit"));

module.exports = route;
