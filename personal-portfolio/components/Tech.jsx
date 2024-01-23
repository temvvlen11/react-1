import { JavascriptIcon } from "./icons/JavascriptIcon";

export const Tech = (props) => {
  const { icon, title } = props;

  return (
    <div className="w-[88px] h-[100px] flex justify-center items-center flex-col gap-2">
      {icon}
      {title}
    </div>
  );
};
