import { useMatchBreakpoints } from "hooks";

import { Box, Container, Flex, FlexGap, Text, Title } from "components";
import { StyledMyWorksItemContainer } from "./styled";

import { MY_WORKS_LIST } from "./constants";

const MyWorks: React.FC = () => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <Box $backgroundColor="primary">
      <Container>
        <Title text="Work" isWhiteColor />

        <FlexGap gap="30px" flexDirection="column">
          {MY_WORKS_LIST.map(({ href, title, imgSrc }, index) => {
            return (
              <Flex width="100%" justifyContent="center" alignItems="center" key={index}>
                {isMobile ? (
                  <Box width="100%">
                    <StyledMyWorksItemContainer
                      imgSrc={imgSrc}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      key={index}
                    ></StyledMyWorksItemContainer>

                    <Box mt="10px">
                      <Text textScale="p24Bold" as="h3" color="dark" textAlign="center" mb="10px">
                        {title}
                      </Text>

                      <Text textScale="p20Regular" color="lightGray" textAlign="center">
                        React
                      </Text>
                    </Box>
                  </Box>
                ) : (
                  <StyledMyWorksItemContainer imgSrc={imgSrc} href={href} target="_blank" rel="noreferrer noopener">
                    {!isMobile && (
                      <div>
                        <Text textScale="p24Bold" as="h3" color="dark" textAlign="center" mb="20px">
                          {title}
                        </Text>

                        <Text textScale="p20Regular" color="lightGray" textAlign="center">
                          React
                        </Text>
                      </div>
                    )}
                  </StyledMyWorksItemContainer>
                )}
              </Flex>
            );
          })}
        </FlexGap>
      </Container>
    </Box>
  );
};

export default MyWorks;
