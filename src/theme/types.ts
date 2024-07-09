import { mediaQueries, breakpoints, fontWeight, fonts, transition, siteWidth } from "./base";
import { colors } from "./colors";

export type MediaQueries = typeof mediaQueries;

export type Breakpoints = typeof breakpoints;

export type Colors = typeof colors;

export type FontWeight = typeof fontWeight;

export type Fonts = typeof fonts;

export type Transition = typeof transition;

export type SiteWidth = typeof siteWidth;

export interface CustomTheme {
  siteWidth: SiteWidth;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  fontWeight: FontWeight;
  fonts: Fonts;
  transition: Transition;
  colors: Colors;
}
