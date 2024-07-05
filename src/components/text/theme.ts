import { css } from "styled-components";

import { scales } from "./types";

export const styles = {
  [scales.h1]: css`
    font-family: ${({ theme }) => theme.fonts.kaushan};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 34px;
    line-height: 1.3;

    ${({ theme }) => theme.mediaQueries.tablet} {
      font-size: 50px;
    }
  `,
  [scales.h3]: css`
    font-family: ${({ theme }) => theme.fonts.spaceMono};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 16px;
    line-height: 1.1;
  `,
};
