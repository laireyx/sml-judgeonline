import stringHash from "string-hash";

import { useMemo } from "react";

export default function useHash(resultString) {
  const resultHash = useMemo(
    () => stringHash(JSON.stringify(resultString)).toString(16),
    [resultString]
  );

  const hashColor = useMemo(
    () =>
      "#" + (stringHash(JSON.stringify(resultString)) & 0xffffff).toString(16),
    [resultString]
  );

  return [resultHash, hashColor];
}
