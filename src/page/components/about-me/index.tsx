import { useMatchBreakpoints } from "hooks";

import { Box, FlexGap, Flex, Text, Title } from "components";
import { StyledAboutMeContainer, StyledAboutMePersonalInfoContainer, StyledSocialLinkContainer } from "./styled";

import { ABOUT_ME_PERSONAL_INFO_LIST } from "./constants";
import { SOCIAL_MEDIA_LIST } from "constants/social-media";

const AboutMe: React.FC = () => {
  const { isDesktop, isMobile } = useMatchBreakpoints();

  return (
    <StyledAboutMeContainer
      initial={{ opacity: 0, y: 50 }}
      animate={isMobile ? { opacity: 1, y: 0 } : undefined}
      whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
      transition={isMobile ? { duration: 0.5, delay: 1 } : { duration: 0.5 }}
      viewport={{ once: true, amount: 0.8 }}
    >
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
            There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in bookmarksgrove there live the blind texts far from the countries.
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
    </StyledAboutMeContainer>
  );
};

export default AboutMe;
