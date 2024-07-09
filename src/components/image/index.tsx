import { useState } from "react";

import { Box, Skeleton } from "components";
import { StyledImage } from "./styled";

import { getImageAltName } from "utils";

import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({ src, variant, alt, ...props }) => {
  const [isLoading, setLoading] = useState(true);
  const altDescription = getImageAltName(src);

  return (
    <Box {...props}>
      {isLoading && <Skeleton variant={variant} />}

      <StyledImage
        style={{ display: !isLoading ? "block" : "none" }}
        src={src}
        variant={variant}
        alt={alt || altDescription}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </Box>
  );
};

export default Image;
