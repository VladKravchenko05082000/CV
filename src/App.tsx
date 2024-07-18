import { ThemeProvider } from "styled-components";

import { useGetIsLoadForFadeOut, useScrollToTop } from "hooks";

import MainPage from "page";
import { FadeOut } from "components";
import { GlobalStyle } from "styles";

import { theme } from "theme";

const App: React.FC = () => {
  useScrollToTop();
  const { isLoad } = useGetIsLoadForFadeOut();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <FadeOut isLoad={isLoad} />

      <MainPage />
    </ThemeProvider>
  );
};

export default App;
