const path = require("path");
const config = require("../../config");
const writeCode = require("./write-code");

module.exports = async function writeSubmittedCode({
  name,
  problemName,
  code,
} = {}) {
  const createdName = `${name}.${Date.now()}.sml`;
  const problemPath = path.join(config.SUBMIT_DIR, problemName);

  const submittedCodePath = path.join(problemPath, createdName);

  await writeCode({
    codePath: submittedCodePath,
    code,
  });

  return { submittedCodePath, problemName };
};
