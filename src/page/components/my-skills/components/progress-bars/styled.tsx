import styled, { keyframes } from "styled-components";

const progressBarStripes = keyframes`
   0% {
    background-position: 40px 0;
  }
  100% {
   background-position: 0 0;
    }
 `;

export const StyledProgressBar = styled.div<{ color: string; value: number }>`
  width: ${({ value }) => `${value}%`};
  height: 5px;
  background-color: ${({ color }) => color};
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-position: 40px 40px;
  animation: ${progressBarStripes} 2s linear infinite alternate;
  -webkit-animation: ${progressBarStripes} 2s linear infinite alternate;
  -o-animation: ${progressBarStripes} 2s linear infinite alternate;
`;
