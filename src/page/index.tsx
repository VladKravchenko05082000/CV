import { AboutMe, Header, HireMe, MyResume, MyServices, MySkills, MyWorks } from "./components";
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

        <MyWorks />

        <HireMe />
      </StyledMainPage>
    </>
  );
};

export default MainPage;
