import { useEffect, useState } from "react";

export function useSubmittedCode({ problemName, codeName }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`http://122.44.165.52:8100/api/code/${problemName}/${codeName}`)
      .then((resp) => resp.text())
      .then((fetchedCode) => setCode(fetchedCode));
  }, [problemName, codeName]);

  return code;
}
