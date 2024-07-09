import { Loader } from "components";
import { StyledFadeOut } from "./styled";
import { useEffect } from "react";

const FadeOut: React.FC<{ isLoad: boolean }> = ({ isLoad }) => {
  const id = "fade-out";
  const fadeOut = document.getElementById(id);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        fadeOut.style.display = "none";
      }, 500);
    }
  }, [fadeOut]);

  return (
    <StyledFadeOut isLoad={isLoad} id={id}>
      <Loader />
    </StyledFadeOut>
  );
};

export default FadeOut;
