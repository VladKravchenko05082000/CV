import { BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";

export interface BoxProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    React.HTMLAttributes<HTMLDivElement> {
  cursor?: React.CSSProperties["cursor"];
}

export interface FlexProps extends BoxProps, FlexboxProps {}

export interface FlexGapProps extends FlexProps {
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}
