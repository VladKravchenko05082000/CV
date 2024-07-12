import { useMatchBreakpoints } from "hooks";

import { AnimatedContainer, Box, Flex, FlexGap, Text } from "components";
import { StyledProgressBar } from "./styled";

import { MY_SKILLS_LIST } from "page/components/my-skills/constants";

const MySkillsProgressBars: React.FC = () => {
  const { isDesktop } = useMatchBreakpoints();

  const firstColumn = MY_SKILLS_LIST.slice(0, 4);
  const secondColumn = MY_SKILLS_LIST.slice(-4);

  return (
    <AnimatedContainer>
      <FlexGap
        mt={{ _: "40px", laptop: "64px" }}
        gap={isDesktop ? "30px" : "0px"}
        flexDirection={{ _: "column", laptop: "row" }}
      >
        <Box width={{ _: "100%", laptop: "50%" }}>
          {firstColumn.map((item, index) => {
            const { title, value, color } = item[0];

            return (
              <Box key={index} pb="15px">
                <Flex pb="10px" justifyContent="space-between">
                  <Text textScale="p16Regular" color="dark">
                    {title}
                  </Text>

                  <Text textScale="p16Regular" color="dark">
                    {value}%
                  </Text>
                </Flex>

                <Box $backgroundColor="workExperience" overflow="hidden" borderRadius="4px" width="100%" height="5px">
                  <StyledProgressBar color={color} value={value} />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box width={{ _: "100%", laptop: "50%" }}>
          {secondColumn.map((item, index) => {
            const { title, value, color } = item[0];

            return (
              <Box key={index} pb="15px">
                <Flex pb="10px" justifyContent="space-between">
                  <Text textScale="p16Regular" color="dark">
                    {title}
                  </Text>

                  <Text textScale="p16Regular" color="dark">
                    {value}%
                  </Text>
                </Flex>

                <Box $backgroundColor="workExperience" overflow="hidden" borderRadius="4px" width="100%" height="5px">
                  <StyledProgressBar color={color} value={value} />
                </Box>
              </Box>
            );
          })}
        </Box>
      </FlexGap>
    </AnimatedContainer>
  );
};

export default MySkillsProgressBars;
