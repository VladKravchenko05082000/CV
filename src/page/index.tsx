import { AboutMe, Header, MyResume, MyServices } from "./components";
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

        <MyServices />
      </StyledMainPage>
    </>
  );
};

export default MainPage;
