import { Techs } from "./Techs";
import { IconButton } from "../icons/IconButton";

export const WorkDetail = () => {
  return (
    <div className="p-12 flex-1 flex flex-col gap-6 bg-[#374151] text-white">
      <h4>Fiskill</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <Techs />
      <IconButton />
    </div>
  );
};
