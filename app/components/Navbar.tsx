"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export const NavigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "GuestBook",
    href: "/guestbook",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];
export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-6 flex sm:col-span-3">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            W.H.<span className="text-blue-500">Naing</span>
          </h1>
        </Link>
      </div>
      <div className="max-sm:hidden sm:flex  justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {NavigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild active={pathname === item.href}>
                  <Link
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-end sm:col-span-3 col-span-6">
        <Button className="max-sm:hidden" asChild>
          <a href="mailto:winhtoonaing2003@gmail.com">Contact Me</a>
        </Button>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
