import { SpaceProps } from "styled-system";
import { Colors } from "theme/types";

export interface SvgProps extends React.SVGAttributes<SVGElement>, SpaceProps {
  color?: keyof Colors;
}
