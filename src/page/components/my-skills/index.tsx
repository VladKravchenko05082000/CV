import { Container, Title } from "components";
import { MySkillsDonuts, MySkillsProgressBars } from "./components";

const MySkills: React.FC = () => {
  return (
    <Container>
      <Title text="My Skills" />

      <MySkillsDonuts />

      <MySkillsProgressBars />
    </Container>
  );
};

export default MySkills;
