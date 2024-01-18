import { menuItems } from "@/data/menuItems";
import { MainMenu } from "./MainMenu";
import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";

export function Header() {
  return (
    <div className="flex justify-between p-4 border-2">
      <Logo />
      <div className="sm:flex md:hidden">
        <Menu />
      </div>
      <MainMenu items={menuItems} />
      <a href="cv.jpg" className="px-4 py-2 text-white bg-black rounded hover:bg-slate-500" download>
        Download
      </a>
    </div>
  );
}
