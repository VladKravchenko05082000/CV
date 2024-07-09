import { useEffect, useState } from "react";

import { FADE_OUT_TIMEOUT } from "constants/timeout";

const useGetIsLoadForFadeOut = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, FADE_OUT_TIMEOUT);
  }, []);

  return { isLoad };
};

export default useGetIsLoadForFadeOut;
