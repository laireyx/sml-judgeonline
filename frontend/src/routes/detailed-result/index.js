import { useParams } from "react-router-dom";

import styles from "./DetailedJudgeResult.module.css";
import { useDetailedStatus } from "./useDetailedStatus";

export default function DetailedJudgeResult() {
  const params = useParams();
  const { problemName, codeName } = params;

  /* eslint-disable no-unused-vars */
  const [_, name, timeStamp] = codeName.match(/(.+?).(\d+).sml/);

  const judgeStatus = useDetailedStatus({
    problemName,
    codeName,
  });

  return (
    <>
      <h1>
        {params.problemName} / {name}
      </h1>
      <table>
        <thead>
          <tr>
            <th>Test name</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(judgeStatus).map((testName, idx) => (
            <tr key={testName}>
              <td>{testName}</td>
              <td className={styles.resultText}>
                <code>{judgeStatus[testName]}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
