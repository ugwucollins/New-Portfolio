import Container from "../../Context/Container";
import OtherSkills from "./OtherSkills";
import SkillsCards from "./SkillsCards";

const SkillsPage = () => {
  return (
    <Container className="py-30">
      <div className="w-full flex flex-col gap-y-20">
        <SkillsCards />
        <OtherSkills />
      </div>
    </Container>
  );
};

export default SkillsPage;
