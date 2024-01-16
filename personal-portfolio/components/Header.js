import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";

export function Header() {
  return (
    <div className="border-2 flex justify-between p-4">
      <Logo />
      <div className="sm:flex md:hidden">
        <Menu />
      </div>
      <div className="hidden sm:flex">
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
      </div>
    </div>
  );
}
