import { AboutMe, Header, MyResume } from "./components";
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

        <MyResume />
      </StyledMainPage>
    </>
  );
};

export default MainPage;
