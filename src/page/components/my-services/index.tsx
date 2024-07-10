import { AnimatedContainer, Box, Column, Flex, FlexGap, Text, Title } from "components";
import { MY_SERVICES_LIST } from "./constants";

const MyServices: React.FC = () => {
  return (
    <Box $backgroundColor="primary">
      <AnimatedContainer>
        <Title text="My Services" isWhiteColor />

        <FlexGap
          gap="30px"
          flexWrap="wrap"
          justifyContent="center"
          alignItems={{ _: "center", laptop: "flex-start" }}
          flexDirection={{ _: "column", laptop: "row" }}
        >
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
    </Box>
  );
};

export default MyServices;
