import styled from "styled-components";

export const StyledMainPage = styled.div`
  max-width: ${({ theme }) => `${theme.siteWidth.mobile}px`};
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  z-index: 1;
  ${({ theme }) => theme.mediaQueries.laptop} {
    max-width: ${({ theme }) => `${theme.siteWidth.desktop}px`};
  }
`;

export const StyledOverlay = styled.div<{ headerHeight: number }>`
  position: absolute;
  width: 100vw;
  height: ${({ headerHeight }) => `${headerHeight}px`};
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.mediaQueries.laptop} {
    height: 100vh;
  }
`;
