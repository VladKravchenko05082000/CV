import { Text } from "components/text";
import { TitleType } from "./types";

const Title: React.FC<TitleType> = ({ text, isWhiteColor }) => {
  return (
    <Text
      textAlign="center"
      color={isWhiteColor ? "white" : "dark"}
      textScale="h2"
      as="h2"
      mb={{ _: "40px", laptop: "80px" }}
    >
      {text}
    </Text>
  );
};

export default Title;
