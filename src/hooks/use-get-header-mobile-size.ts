import { useEffect, useState } from "react";

import { ELEMENTS_ID } from "constants/elements-id";

const useGetHeaderMobileSize = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const header = document.getElementById(ELEMENTS_ID.header);

  useEffect(() => {
    if (header?.offsetHeight) {
      setHeaderHeight(header.offsetHeight);
    }
  }, [header?.offsetHeight]);

  return { headerHeight };
};

export default useGetHeaderMobileSize;
