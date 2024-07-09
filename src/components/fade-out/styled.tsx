import styled from "styled-components";

export const StyledFadeOut = styled.div<{ isLoad: boolean }>`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  opacity: ${({ isLoad }) => (isLoad ? 0 : 1)};
  -webkit-transition: ${({ theme }) => theme.transition.default};
  -o-transition: ${({ theme }) => theme.transition.default};
  transition: ${({ theme }) => theme.transition.default};
`;
