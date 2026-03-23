import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";
import { Certifications } from "../components/sections/Certifications";
import { Education } from "../components/sections/Education";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";

export function Index() {

  return (
    <div className="bg-gray-950">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
}
