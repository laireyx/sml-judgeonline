const process = require("process");
const express = require("express");
const config = require("./config");
const listSubmits = require("./services/list/list-submits");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./routes"));

app.listen(config.PORT, () => {
  console.log(`Server is listening at : ${config.PORT}`);
});
