import styled from "styled-components";

export const StyledAboutMePersonalInfoContainer = styled.div`
  width: 70%;

  ${({ theme }) => theme.mediaQueries.laptop} {
    position: relative;

    a {
      display: inline-grid;
      width: fit-content;

      &::before {
        content: "";
        clear: both;
        width: 100%;
        height: 0.2px;
        position: absolute;
        top: 90%;
        left: 0;
        transition:
          clip-path 0.3s,
          transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
      }
    }

    &:hover {
      a {
        transition: ${({ theme }) => theme.transition.cubic_bezier_0_3s};
        transform: translate3d(0, -2px, 0);

        &::before {
          background: ${({ theme }) => theme.colors.dark};
          clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
          transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
        }
      }
    }
  }
`;

export const StyledSocialLinkContainer = styled.a`
  display: inline-block;
  border-radius: 2px;
  padding: 10px 10px 2px 10px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
