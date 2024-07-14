import styled from "styled-components";

export const StyledMyWorksItemContainer = styled.a<{ imgSrc: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  width: 100%;
  height: 240px;
  background-size: cover;
  background-position-x: center;
  position: relative;
  border-radius: 12px;

  ${({ theme }) => theme.mediaQueries.mobileL} {
    height: 400px;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: 685px;
    height: 425px;

    div {
      opacity: 0;
      transition: ${({ theme }) => theme.transition.default};
      position: relative;
      z-index: 1;

      h3 {
        transform: translateY(-20px);
        transition: inherit;
      }

      p {
        transform: translateY(20px);
        transition: inherit;
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      background-color: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transition.default};
      z-index: 0;
      border-radius: 12px;
    }

    &:hover {
      div {
        opacity: 1;
      }

      h3 {
        transform: translateY(0px);
      }

      p {
        transform: translateY(0px);
      }

      &::before {
        opacity: 0.9;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.laptop} {
    width: 911px;
    height: 566px;
  }
`;
