const { Router } = require("express");

const route = Router();

route.use("/problem", require("./problem"));
route.use("/verify", require("./verify"));

module.exports = route;
