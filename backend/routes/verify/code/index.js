const fs = require("fs");
const { Router } = require("express");
const multer = require("multer");
const judge = require("../../../services/judge");
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

  if (!req.body.problem) {
    res.status(400).send("No Problem Name");
    return;
  }

  const uploadedPath = req.file.path;
  const createdName = `${req.body.name}.${Date.now()}.sml`;
  const problemPath = path.join(config.VERIFY_DIR, req.body.verificationPath);
  const verificationPath = path.join(problemPath, createdName);

  fs.rename(uploadedPath, verificationPath, (err) => {
    if (err) {
      res.status(500).send("Failed");
    } else {
      /** @todo judge with this code */
      judge.judgeWithNewVerification({
        verificationPath: verificationPath,
        problemName: req.body.problem,
      });
      res.send("OK");
    }
  });
});

module.exports = route;
