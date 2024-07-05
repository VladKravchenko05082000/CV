import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

import { Colors } from "theme/types";

export const scales = {
  h1: "h1",
  h3: "h3",
};

export type Scales = (typeof scales)[keyof typeof scales];

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: keyof Colors;
  textScale?: Scales;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
