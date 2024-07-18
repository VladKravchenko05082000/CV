import { AnimatedContainer, Box, Flex, Text } from "components";
import { StyledHireMeButton } from "./styled";

const HireMe: React.FC = () => {
  return (
    <Box $backgroundColor="primary">
      <AnimatedContainer>
        <Text textAlign="center" color="white" textScale="h2" as="h2" pb="20px">
          Hire me
        </Text>

        <Text textAlign="center" textScale="p16Regular" color="white" maxWidth="780px" margin="0 auto" pb="30px">
          Ready to work and interested in new projects and challenges! I look forward to the opportunity to contribute
          to your team. Please contact me to discuss collaboration opportunities and learn more about my experience and
          skills.
        </Text>

        <Flex justifyContent="center" width="100%">
          <StyledHireMeButton href="https://t.me/Petrovichmladshii" target="_blank" rel="noreferrer noopener">
            Contact me
          </StyledHireMeButton>
        </Flex>
      </AnimatedContainer>
    </Box>
  );
};

export default HireMe;
