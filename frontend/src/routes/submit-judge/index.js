import SubmitEditor from "../../components/SubmitEditor";

export default function SubmitJudge() {
  return (
    <SubmitEditor
      title="Submit Judge Code"
      submitUrl="http://122.44.165.52:8100/api/judge/code"
    />
  );
}
