const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const config = require("../../config");
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

module.exports = async function writeJudgeCode({
  name,
  problemName,
  code,
} = {}) {
  const createdName = `${name}.${Date.now()}.sml`;
  const problemPath = path.join(config.JUDGE_DIR, problemName);

  const judgeCodePath = path.join(problemPath, createdName);
  const codeText = `use "${config.JUDGE_LIBRARY_DIR}/test_library.sml"; start(); ${code} finish();`;

  await mkdir(problemPath, { recursive: true });
  await writeFile(judgeCodePath, codeText);

  return { judgeCodePath, problemName };
};
