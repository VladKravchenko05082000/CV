import { Box, Container, Flex, Text, Title } from "components";
import {
  StyledWorkExperienceItem,
  StyledWorkExperienceItemContainer,
  StyledWorkExperienceListContainer,
  StyledWorkExperienceTitleContainer,
} from "./styled";
import { WorkExperienceIcon } from "components/svg";

import { WORK_EXPERIENCE_LIST } from "./contants";

const MyResume: React.FC = () => {
  return (
    <Container>
      <Title text="My Resume" />

      <StyledWorkExperienceListContainer>
        <StyledWorkExperienceTitleContainer>
          <Box $backgroundColor="workExperience" borderRadius="4px" maxWidth="271px" marginBottom="20px">
            <Text
              textTransform="uppercase"
              p="7px 15px"
              letterSpacing="5px"
              color="dark"
              $fontWeight="bold"
              textScale="h3"
              textAlign="center"
              as="h3"
            >
              Work Experience
            </Text>
          </Box>
        </StyledWorkExperienceTitleContainer>

        {WORK_EXPERIENCE_LIST.map(({ text, title, timePeriod }, index) => {
          const isEven = index % 2 === 0;

          return (
            <StyledWorkExperienceItemContainer
              key={index}
              isEven={isEven}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <Flex
                justifyContent="center"
                position="absolute"
                width="44px"
                height="44px"
                top={{ _: "0px", laptop: "40px" }}
                left={{ _: "10px", laptop: "calc(50% - 21px)" }}
                borderRadius="50%"
                $backgroundColor="primary"
              >
                <WorkExperienceIcon width="20" />
              </Flex>

              <StyledWorkExperienceItem isEven={isEven}>
                <Text as="h3" textScale="p24Regular" color="dark" mb="20px">
                  {title}
                </Text>

                <Text textScale="p16Regular" color="timePeriod" mb="20px">
                  {timePeriod}
                </Text>

                <Text color="darkLight" textScale="p16Regular">
                  {text}
                </Text>
              </StyledWorkExperienceItem>
            </StyledWorkExperienceItemContainer>
          );
        })}
      </StyledWorkExperienceListContainer>
    </Container>
  );
};

export default MyResume;
