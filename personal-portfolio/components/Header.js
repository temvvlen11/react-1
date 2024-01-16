import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";

export function Header() {
  return (
    <div className="border-2 border-red-600 flex justify-between p-4">
      <Logo />
      <Menu />
    </div>
  );
}
