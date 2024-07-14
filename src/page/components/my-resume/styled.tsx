import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledWorkExperienceListContainer = styled.ul`
  padding-top: 20px;
  position: relative;

  &::before {
    content: " ";
    top: 20px;
    bottom: 0;
    position: absolute;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.workExperience};
    left: 30px;
    margin-left: 0px;

    ${({ theme }) => theme.mediaQueries.laptop} {
      left: 50%;
    }
  }
`;

export const StyledWorkExperienceTitleContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  position: relative;

  ${({ theme }) => theme.mediaQueries.laptop} {
    justify-content: center;
  }
`;

export const StyledWorkExperienceItemContainer = styled(motion.li)<{ isEven: boolean }>`
  padding-bottom: 40px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  &:last-child {
    padding-bottom: 0px;
  }

  ${({ theme }) => theme.mediaQueries.laptop} {
    justify-content: ${({ isEven }) => (isEven ? "flex-start" : "flex-end")};
  }
`;

export const StyledWorkExperienceItem = styled.div<{ isEven: boolean }>`
  width: 75%;
  position: relative;
  text-align: start;

  ${({ theme }) => theme.mediaQueries.mobileL} {
    width: 85%;
  }

  ${({ theme }) => theme.mediaQueries.laptop} {
    width: 45%;
    text-align: ${({ isEven }) => (isEven ? "end" : "start")};
  }
`;
