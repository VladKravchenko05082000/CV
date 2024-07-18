import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMyServicesContainerMobile = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.mobileL} {
    width: 75%;
  }
`;
