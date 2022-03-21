import { useParams } from "react-router-dom";
import JudgeResultItem from "../../components/JudgeResultItem";
import useJudgeStatus from "./useJudgeStatus";

export default function JudgeStatus() {
  const params = useParams();
  const judgeStatus = useJudgeStatus(params.problemName);

  console.log(judgeStatus);

  return (
    <>
      <h1>Judge Result</h1>
      <h2>{params.problemName}</h2>
      {Object.keys(judgeStatus).map((codeName) => (
        <JudgeResultItem
          key={codeName}
          codeName={codeName}
          result={judgeStatus[codeName]}
        />
      ))}
    </>
  );
}
