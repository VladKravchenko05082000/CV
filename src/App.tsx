import { useEffect, useState } from "react";

import MainPage from "page";
import { FadeOut } from "components";
import { GlobalStyle } from "styles";

const App: React.FC = () => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyle />

      <FadeOut isLoad={isLoad} />

      <MainPage />
    </>
  );
};

export default App;
