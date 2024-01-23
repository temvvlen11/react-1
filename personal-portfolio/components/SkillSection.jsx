import { Chip } from "./Chip";
import { Tech } from "./Tech";
import { Techs } from "./skill/data";

export const SkillSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-24">
      <div className="mb-12 flex flex-col items-center justify-center gap-4">
        <Chip label="Skills" />
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="flex gap-9 flex-wrap px-8 items-center">
        {Techs.map(({ icon, title }, index) => (
          <Tech icon={icon} title={title} key={index} />
        ))}
      </div>
    </div>
  );
};
