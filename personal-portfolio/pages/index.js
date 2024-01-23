import { WorkSection, SkillSection, Header, Container } from "../components";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <SkillSection />
        <WorkSection />
      </Container>
    </div>
  );
}
