import { useParams } from "react-router-dom";
import useJudgeStatus from "./useJudgeStatus";

export default function JudgeStatus() {
  const params = useParams();
  const judgeStatus = useJudgeStatus(params.problemName);
  return <>{JSON.stringify(judgeStatus)}</>;
}
