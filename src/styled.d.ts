import "styled-components";

import { CustomTheme } from "theme/types";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
