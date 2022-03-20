const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

module.exports = async function writeSubmittedCode({
  name,
  problemName,
  code,
} = {}) {
  const createdName = `${name}.${Date.now()}.sml`;
  const problemPath = path.join(config.SUBMIT_DIR, problemName);

  const submittedCodePath = path.join(problemPath, createdName);

  await mkdir(problemPath, { recursive: true });
  await writeFile(submittedCodePath, code);

  return { submittedCodePath, problemName };
};
