"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavigationItems } from "./Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const location = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-12 flex px-2 space-y-1 flex-col">
          {NavigationItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={cn(
                location === item.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-75",
                "group flex px-2 py-2 text-md font-semibold rounded-md"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
