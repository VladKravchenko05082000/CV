import { Column, FlexGap, Image, Text } from "components";
import { StyledHeader, StyledHeaderMainHeading } from "./styled";

import { SOCIAL_MEDIA_LIST } from "constants/social-media";
import { ELEMENTS_ID } from "constants/elements-id";

const Header: React.FC = () => {
  return (
    <StyledHeader id={ELEMENTS_ID.header}>
      <Column alignItems="center">
        <Image
          src="/images/main-photo.webp"
          alt="main-photo"
          width={{ _: "250px", laptopL: "16.67vw" }}
          height={{ _: "250px", laptopL: "16.67vw" }}
          variant="circle"
        />

        <StyledHeaderMainHeading textScale="h1" as="h1" pt="30px" pb="30px">
          <span>Kravchenko Vlad</span>
        </StyledHeaderMainHeading>

        <Text textScale="h3" as="h3" pb="30px">
          React/Angular Developer
        </Text>

        <FlexGap gap="20px">
          {SOCIAL_MEDIA_LIST.map(({ Icon, href }, index) => (
            <a key={index} href={href} target="_blank" rel="noreferrer noopener">
              <Icon width="30" />
            </a>
          ))}
        </FlexGap>
      </Column>
    </StyledHeader>
  );
};

export default Header;
