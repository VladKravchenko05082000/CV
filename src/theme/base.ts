export const siteWidth = {
  desktop: 1440,
  mobile: 720,
};

export const breakpointMap = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
} as const;

export const breakpointsArray = Object.values(breakpointMap).map(item => `${item}px`);

export const breakpoints = Object.assign(breakpointsArray, {
  mobileS: breakpointsArray[0],
  mobileM: breakpointsArray[1],
  mobileL: breakpointsArray[2],
  tablet: breakpointsArray[3],
  laptop: breakpointsArray[4],
  laptopL: breakpointsArray[5],
});

export const mediaQueries = {
  mobileS: `@media screen and (min-width: ${breakpointsArray[0]})`,
  mobileM: `@media screen and (min-width: ${breakpointsArray[1]})`,
  mobileL: `@media screen and (min-width: ${breakpointsArray[2]})`,
  tablet: `@media screen and (min-width: ${breakpointsArray[3]})`,
  laptop: `@media screen and (min-width: ${breakpointsArray[4]})`,
  laptopL: `@media screen and (min-width: ${breakpointsArray[5]})`,
} as const;

export const fontWeight = {
  regular: 400,
  bold: 700,
} as const;

export const fonts = { spaceMono: "'Space Mono', Arial, serif", kaushan: "'Kaushan Script', cursive" } as const;

export const transition = {
  default: "0.5s",
  cubic_bezier_0_3s: "all .3s cubic-bezier(.2,1,.8,1)",
};
