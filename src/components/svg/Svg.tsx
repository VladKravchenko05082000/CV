import styled from "styled-components";

import { space } from "styled-system";

import { SvgProps } from "./types";


const Svg = styled.svg<SvgProps>`
  align-self: center;
  fill: ${({ theme, color }) => color && theme.colors[color]};
  flex-shrink: 0;

  ${space}
`;

export default Svg;
