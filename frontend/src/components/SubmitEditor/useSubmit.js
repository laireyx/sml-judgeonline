import { useNavigate } from "react-router-dom";

export default function useSubmit(submitUrl) {
  const navigate = useNavigate();

  return (body) => {
    fetch(submitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then(() => navigate(`/status/${body.problemName}`));
  };
}
