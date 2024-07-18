import { useMatchBreakpoints } from "hooks";

import { Box, FlexGap, Flex, Text, Title, AnimatedContainer } from "components";
import { StyledAboutMePersonalInfoContainer, StyledSocialLinkContainer } from "./styled";

import { ABOUT_ME_PERSONAL_INFO_LIST } from "./constants";
import { SOCIAL_MEDIA_LIST } from "constants/social-media";

const AboutMe: React.FC = () => {
  const { isDesktop } = useMatchBreakpoints();

  return (
    <AnimatedContainer>
      <Title text="About Me" />

      <FlexGap gap={isDesktop ? "80px" : "40px"} flexDirection={{ _: "column", laptop: "row" }}>
        <Box width={{ _: "100%", laptop: "34%" }}>
          <FlexGap rowGap="20px" flexDirection="column">
            {ABOUT_ME_PERSONAL_INFO_LIST.map(({ title, text, href }, index) => (
              <Flex key={index}>
                <Box width="30%">
                  <Text textScale="p16Bold" color="dark">
                    {title}:
                  </Text>
                </Box>

                <StyledAboutMePersonalInfoContainer>
                  {href ? (
                    <a href={href}>
                      <Text textScale="p16Regular" color="lightGray" ellipsis>
                        {text}
                      </Text>
                    </a>
                  ) : (
                    <Text textScale="p16Regular" color="lightGray">
                      {text}
                    </Text>
                  )}
                </StyledAboutMePersonalInfoContainer>
              </Flex>
            ))}
          </FlexGap>
        </Box>

        <Box width={{ _: "100%", laptop: "66%" }}>
          <Text textScale="p30Regular" color="dark" pb="20px">
            Hello There!
          </Text>

          <Text textScale="p16Regular" color="darkLight" pb="20px">
            Hello! My name is Vlad, and I am 23 years old. I have been engaged in front-end development for 3 years,
            with 2.5 years of commercial development experience. I specialize in creating modern and user-friendly web
            applications using React. Over the past 2.5 years, I have gained substantial experience in developing
            blockchain applications and possess deep knowledge in this field. I am also interested in gaining experience
            in other areas of development and am open to new opportunities.
          </Text>

          <FlexGap gap="20px">
            {SOCIAL_MEDIA_LIST.map(({ Icon, href }, index) => (
              <StyledSocialLinkContainer key={index} href={href} target="_blank" rel="noreferrer noopener">
                <Icon width="20" />
              </StyledSocialLinkContainer>
            ))}
          </FlexGap>
        </Box>
      </FlexGap>
    </AnimatedContainer>
  );
};

export default AboutMe;
