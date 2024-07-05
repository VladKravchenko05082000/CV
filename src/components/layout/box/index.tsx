import styled from "styled-components";

import { border, layout, position, space } from "styled-system";

import { BoxProps } from "../types";

export const Box = styled.div<BoxProps>`
  cursor: ${({ cursor }) => cursor && cursor};

  ${border}
  ${layout}
  ${position}
  ${space}
`;
