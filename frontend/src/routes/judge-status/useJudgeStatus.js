import { useEffect, useMemo, useState } from "react";

export default function useJudgeStatus(problemName) {
  const [judgeStatus, setJudgeStatus] = useState({});

  useEffect(() => {
    fetch(`http://122.44.165.52:8100/api/judge/status/problem/${problemName}`)
      .then((resp) => resp.json())
      .then((fetchedStatus) => setJudgeStatus(fetchedStatus));
  }, [problemName]);

  const sortedResult = useMemo(() => {
    const sorted = {};
    Object.keys(judgeStatus)
      .sort()
      .forEach((sortedKey) => {
        sorted[sortedKey] = judgeStatus[sortedKey];
      });
    return sorted;
  }, [judgeStatus]);

  return sortedResult;
}
