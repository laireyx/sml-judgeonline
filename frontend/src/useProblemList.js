import { useEffect, useState } from "react";

export default function useProblemList() {
  const [problemList, setProblemList] = useState([]);

  useEffect(() => {
    fetch("http://122.44.165.52:8100/api/problem/list")
      .then((resp) => resp.json())
      .then((fetchedList) => setProblemList(fetchedList));
  }, []);

  return problemList;
}
