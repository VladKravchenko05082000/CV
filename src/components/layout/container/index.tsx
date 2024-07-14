import { useMatchBreakpoints } from "hooks";

import { StyledAnimatedContainer, StyledContainer } from "./styled";

export const AnimatedContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <StyledAnimatedContainer
      initial={{ opacity: 0, y: -50 }}
      animate={isMobile ? { opacity: 1, y: 0 } : undefined}
      whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
      transition={isMobile ? { duration: 0.5, delay: 1 } : { duration: 0.5 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </StyledAnimatedContainer>
  );
};

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
