import { useEffect, useMemo, useState } from "react";

export function useDetailedStatus({ problemName, codeName }) {
  const [judgeStatus, setJudgeStatus] = useState({});

  useEffect(() => {
    fetch(
      `http://122.44.165.52:8100/api/judge/status/code/${problemName}/${codeName}`
    )
      .then((resp) => resp.json())
      .then((fetchedStatus) => setJudgeStatus(fetchedStatus));
  }, [problemName, codeName]);

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
