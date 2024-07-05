import { useEffect, useState } from "react";

const useGetIsLoadForFadeOut = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  }, []);

  return { isLoad };
};

export default useGetIsLoadForFadeOut;
