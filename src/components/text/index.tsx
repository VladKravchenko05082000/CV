import styled from "styled-components";

import { theme } from "theme";
import { styles } from "./theme";

import { layout, space, typography } from "styled-system";

import { TextProps } from "./types";

export const Text = styled.p<TextProps>`
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.white)};

  ${({ textScale }) => textScale && styles[textScale]};

  ${space};
  ${typography};
  ${layout};
`;
