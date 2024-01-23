import { WorkImage } from "./work/WorkImage";
import { WorkDetail } from "./work/WorkDetail";

export const WorkSection = () => {
  return (
    <div>
      <div className="flex">
        <WorkImage />
        <WorkDetail />
      </div>
      <div className="flex">
        <WorkDetail />
        <WorkImage />
      </div>
    </div>
  );
};
