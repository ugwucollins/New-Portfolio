import Container from "../../Context/Container";
import OtherSkills from "./OtherSkills";
import Prof from "./Prof";
import SkillsCards from "./SkillsCards";

const SkillsPage = () => {
  return (
    <Container className="py-30">
      <div className="w-full flex flex-col gap-y-20">
        <SkillsCards />
        <Prof />
        <OtherSkills />
      </div>
    </Container>
  );
};

export default SkillsPage;
