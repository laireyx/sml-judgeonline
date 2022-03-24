import CodeViewer from "../../components/CodeViewer";
import { useParams } from "react-router-dom";
import { useSubmittedCode } from "./useSubmittedCode";

export default function ViewSubmitted() {
  const params = useParams();

  const { problemName, codeName } = params;

  const code = useSubmittedCode({ problemName, codeName });

  return (
    <CodeViewer problemName={problemName} codeName={codeName} code={code} />
  );
}
