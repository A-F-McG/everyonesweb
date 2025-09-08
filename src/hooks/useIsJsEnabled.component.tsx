import { useEffect, useState } from "react";

export function useIsJsEnabled() {
  const [isJsEnabled, setIsJsEnabled] = useState(false);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  return isJsEnabled;
}
