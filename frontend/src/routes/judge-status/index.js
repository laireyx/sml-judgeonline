import { useParams } from "react-router-dom";
import JudgeResultItem from "../../components/JudgeResultItem";
import useJudgeStatus from "./useJudgeStatus";

import styles from "./JudgeStatus.module.css";

export default function JudgeStatus() {
  const params = useParams();
  const judgeStatus = useJudgeStatus(params.problemName);

  return (
    <>
      <h1>Judge Result of {params.problemName}</h1>
      <table>
        <thead>
          <tr>
            <th>Code name</th>
            <th>Result</th>
            <th>Submitted date</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(judgeStatus).map((codeName, idx) => (
            <JudgeResultItem
              className={idx % 2 === 1 ? styles.oddRow : styles.evenRow}
              key={codeName}
              problemName={params.problemName}
              codeName={codeName}
              result={judgeStatus[codeName]}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
