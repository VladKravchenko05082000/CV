import { useRef } from "react";
import { useInView } from "framer-motion";

import { useGetIsLoadForFadeOut, useMatchBreakpoints } from "hooks";

import { Column, FlexGap, Text } from "components";
import { StyledPieChart } from "./styled";

import { MY_SKILLS_LIST } from "page/components/my-skills/constants";
import { theme } from "theme";

const MySkillsDonuts: React.FC = () => {
  const { isLoad } = useGetIsLoadForFadeOut();
  const { isMobile } = useMatchBreakpoints();

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const donutsMySkillsList = MY_SKILLS_LIST.map(item =>
    item.map((iterator, index) => (index === 0 ? { ...iterator, color: theme.colors.primary } : iterator)),
  );

  return (
    <div ref={ref}>
      <FlexGap columnGap="80px" rowGap="40px" flexWrap="wrap" justifyContent="center">
        {isLoad &&
          isInView &&
          donutsMySkillsList.map((item, index) => {
            return (
              <Column position="relative" key={index} alignItems="center" justifyContent="center">
                <StyledPieChart data={item} lineWidth={5} animate animationDuration={1500} />

                <Column alignItems="center" position="absolute">
                  <Text textScale={!isMobile ? "p16Bold" : "p14Bold"} color="darkLight">
                    {item[0].title}
                  </Text>

                  <Text textScale={!isMobile ? "p16Regular" : "p14Regular"} color="lightGray">
                    {item[0].value}%
                  </Text>
                </Column>
              </Column>
            );
          })}
      </FlexGap>
    </div>
  );
};

export default MySkillsDonuts;
