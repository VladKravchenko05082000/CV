import { ThemeProvider } from "styled-components";

import MainPage from "page";
import { FadeOut } from "components";
import { GlobalStyle } from "styles";

import { theme } from "theme";
import { useGetIsLoadForFadeOut } from "hooks";

const App: React.FC = () => {
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
