import { Box } from "components";
import { AboutMe, Header } from "./components";
import { StyledMainPage, StyledOverlay } from "./styled";

import { useGetHeaderMobileSize } from "hooks";

const MainPage: React.FC = () => {
  const { headerHeight } = useGetHeaderMobileSize();

  return (
    <>
      <StyledOverlay headerHeight={headerHeight} />

      <StyledMainPage>
        <Header />

        <AboutMe />

        <Box minHeight="100vh"></Box>
      </StyledMainPage>
    </>
  );
};

export default MainPage;
