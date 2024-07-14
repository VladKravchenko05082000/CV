import styled from "styled-components";

export const StyledHireMeButton = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  padding: 18px 36px;
  background-color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  border-radius: 30px;
  width: 100%;
  text-align: center;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: auto;
  }
`;
