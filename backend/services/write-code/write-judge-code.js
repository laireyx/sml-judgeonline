const path = require("path");
const config = require("../../config");
const writeCode = require("./write-code");

module.exports = async function writeJudgeCode({
  name,
  problemName,
  code,
} = {}) {
  const createdName = `${name}.${Date.now()}.sml`;
  const problemPath = path.join(config.JUDGE_DIR, problemName);

  const judgeCodePath = path.join(problemPath, createdName);

  await writeCode({
    codePath: judgeCodePath,
    code,
  });

  return { judgeCodePath, problemName };
};
