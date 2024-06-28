import { Triangle } from "react-loader-spinner";

import useMatchBreakpoints from "hooks/use-match-breakpoints";

import { theme } from "theme";

const Loader: React.FC = () => {
  const { isLaptopL } = useMatchBreakpoints();

  return (
    <Triangle
      visible={true}
      height={isLaptopL ? "10vh" : "80"}
      width={isLaptopL ? "10vw" : "80"}
      color={theme.colors.primary}
      ariaLabel="triangle-loading"
    />
  );
};

export default Loader;
