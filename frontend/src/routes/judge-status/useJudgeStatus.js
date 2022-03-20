import { useEffect, useState } from "react";

export default function useJudgeStatus(problemName) {
  const [judgeStatus, setJudgeStatus] = useState([]);

  useEffect(() => {
    fetch(`http://122.44.165.52:8100/api/judge/status/${problemName}`)
      .then((resp) => resp.json())
      .then((fetchedStatus) => setJudgeStatus(fetchedStatus));
  }, [problemName]);

  return judgeStatus;
}
