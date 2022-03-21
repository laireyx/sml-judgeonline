export default function JudgeResultItem({ codeName, result }) {
  const [_, name, timeStamp] = codeName.match(/([^.]+).(\d+).sml.result.json/);

  return (
    <>
      {name}.sml({new Date(+timeStamp).toLocaleString()})
      <ul>
        {Object.keys(result).map((judgeCode) => (
          <li key={codeName + judgeCode}>
            {judgeCode} : {result[judgeCode].length}B
          </li>
        ))}
      </ul>
      <br />
    </>
  );
}
