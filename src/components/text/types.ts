import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

import { Colors, FontWeight } from "theme/types";

export interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

export const scales = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p30Regular: "p30Regular",
  p24Regular: "p24Regular",
  p16Regular: "p16Regular",
  p16Bold: "p16Bold",
};

export type Scales = (typeof scales)[keyof typeof scales];

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: keyof Colors;
  $fontWeight?: keyof FontWeight;
  ellipsis?: boolean;
  textScale?: Scales;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
