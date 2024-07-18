import { useMatchBreakpoints } from "hooks";

import { AnimatedContainer, Box, Column, Container, Flex, FlexGap, Text, Title } from "components";
import { MY_SERVICES_LIST } from "./constants";
import { StyledMyServicesContainerMobile } from "./styled";

const MyServices: React.FC = () => {
  const { isDesktop } = useMatchBreakpoints();
  return (
    <Box $backgroundColor="primary">
      {isDesktop ? (
        <AnimatedContainer>
          <Title text="My Services" isWhiteColor />

          <FlexGap gap="30px" flexWrap="wrap" justifyContent="center">
            {MY_SERVICES_LIST.map(({ icon: Icon, text, title }, index) => {
              return (
                <Column
                  width={{ _: "100%", mobileL: "75%", laptop: "calc(33.3% - 20px)" }}
                  key={index}
                  alignItems="center"
                >
                  <Flex
                    borderRadius="50%"
                    width="100px"
                    height="100px"
                    $backgroundColor="white"
                    justifyContent="center"
                    alignItems="center"
                    mb="20px"
                  >
                    <Icon />
                  </Flex>

                  <Text as="h3" textScale="p24Regular" color="white" mb="20px" textAlign="center">
                    {title}
                  </Text>

                  <Text textScale="p16Regular" color="myServicesWhiteTextColor" textAlign="center">
                    {text}
                  </Text>
                </Column>
              );
            })}
          </FlexGap>
        </AnimatedContainer>
      ) : (
        <Container>
          <Title text="My Services" isWhiteColor />

          <FlexGap gap="30px" flexWrap="wrap" justifyContent="center" alignItems="center" flexDirection="column">
            {MY_SERVICES_LIST.map(({ icon: Icon, text, title }, index) => {
              return (
                <StyledMyServicesContainerMobile
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Flex
                    borderRadius="50%"
                    width="100px"
                    height="100px"
                    $backgroundColor="white"
                    justifyContent="center"
                    alignItems="center"
                    mb="20px"
                  >
                    <Icon />
                  </Flex>

                  <Text as="h3" textScale="p24Regular" color="white" mb="20px" textAlign="center">
                    {title}
                  </Text>

                  <Text textScale="p16Regular" color="myServicesWhiteTextColor" textAlign="center">
                    {text}
                  </Text>
                </StyledMyServicesContainerMobile>
              );
            })}
          </FlexGap>
        </Container>
      )}
    </Box>
  );
};

export default MyServices;
