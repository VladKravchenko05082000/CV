import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAnimatedContainer = styled(motion.div)`
  padding: 48px 16px;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.siteWidth}px`};

  ${({ theme }) => theme.mediaQueries.laptop} {
    padding: 112px 16px;
  }
`;

export const StyledContainer = styled.div`
  padding: 48px 16px;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.siteWidth}px`};

  ${({ theme }) => theme.mediaQueries.laptop} {
    padding: 112px 16px;
  }
`;
