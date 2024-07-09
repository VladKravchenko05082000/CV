import styled, { css } from "styled-components";

import { Text } from "components";

import { clearfix } from "styles";

const getSideLineStyles = () => {
  return css`
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    top: 28px;
    width: 20px;
    height: 3px;

    ${({ theme }) => theme.mediaQueries.laptop} {
      top: 40px;
      width: 30px;
      height: 4px;
    }
  `;
};

export const StyledHeader = styled.header`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;

  ${({ theme }) => theme.mediaQueries.laptop} {
    height: 100vh;
  }
`;

export const StyledHeaderMainHeading = styled(Text)`
  transform: rotate(-5deg);

  span {
    position: relative;
    padding: 4px 15px;

    &::before {
      ${clearfix};
      left: 0;
      margin-left: -15px;
      ${getSideLineStyles()};

      ${({ theme }) => theme.mediaQueries.laptop} {
        margin-left: -30px;
      }
    }

    &::after {
      ${clearfix};
      right: 0;
      margin-right: -15px;
      ${getSideLineStyles()};

      ${({ theme }) => theme.mediaQueries.laptop} {
        margin-right: -30px;
      }
    }
  }
`;
