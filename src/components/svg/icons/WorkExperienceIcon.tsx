import { Svg } from "components";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = ({ color = "white", ...props }) => {
  return (
    <Svg id="Filled" viewBox="0 0 24 24" {...props} color={color}>
      <path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z" />
      <path d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z" />
    </Svg>
  );
};

export default Icon;
