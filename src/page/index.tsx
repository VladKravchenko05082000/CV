import { AboutMe, Header, HireMe, MyResume, MyServices, MySkills } from "./components";
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

        <MySkills />

        <HireMe />
      </StyledMainPage>
    </>
  );
};

export default MainPage;
