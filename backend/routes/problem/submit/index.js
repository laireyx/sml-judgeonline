const fs = require("fs");
const { Router } = require("express");
const multer = require("multer");
const config = require("../../../config");

const route = Router();
const upload = multer({
  dest: config.UPLOAD_DIR,
});

route.post("/", upload.single("code"), (req, res, next) => {
  if (!req.file) {
    res.status(400).send("No Code Attached");
    return;
  }

  if (!req.body.name) {
    res.status(400).send("No Name");
    return;
  }

  const uploadedPath = req.file.path;
  const createdName = `${req.body.name}.${Date.now()}.sml`;
  const submitPath = path.join(config.SUBMIT_DIR, createdName);

  fs.rename(uploadedPath, submitPath, (err) => {
    if (err) {
      res.status(500).send("Failed");
    } else {
      /** @todo judge this code */
      res.send("OK");
    }
  });
});

module.exports = route;
