import { MenuItems } from "./MenuItems";
import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";

export function Header() {
  const menuItems = [
    { label: "About", link: "/about" },
    { label: "Work", link: "/work" },
    { label: "Testimonials", link: "/testimonials" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="border-2 flex justify-between p-4">
      <Logo />
      <div className="sm:flex md:hidden">
        <Menu />
      </div>
      <MenuItems items={menuItems} />
    </div>
  );
}
