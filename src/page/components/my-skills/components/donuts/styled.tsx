import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";

export const StyledPieChart = styled(PieChart)`
  transform: rotate(245deg);
  width: 175px;

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: 200px;
  }
`;
