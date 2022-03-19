const { Router } = require("express");

const route = Router();

route.use("/list", require("./list"));
route.use("/submit", require("./submit"));

module.exports = route;
