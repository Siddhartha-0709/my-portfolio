"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [showContact, setShowContact] = useState(false);
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "https://www.youtube.com/@siddharthadotcom", label: "YouTube" },
    { href: "https://github.com/Siddhartha-0709", label: "GitHub" },
  ];

  const contactItems = [
    { href: "https://www.linkedin.com/in/sidd-myself/", label: "LinkedIn" },
    { href: "https://x.com/siddharthadotco", label: "Twitter" },
    { href: "https://www.instagram.com/sidd_myself/", label: "Instagram" },
  ];

  return (
    <div
      className={cn(
        "fixed w-[100%] z-50 bg-black",
        className
      )}
    >
      <div className="">
        <Link href="/">
          <TextGenerateEffect className="hidden md:block absolute left-[1%] top-10" words={'Siddhartha'} size="text-2xl font-bold" />
        </Link>
        <div className="hidden md:block absolute right-[2%] top-5"
        >
          <Menu setActive={setActive}>
            {menuItems.map((item) => (
              <HoveredLink key={item.href} href={item.href}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item={item.label}
                />
              </HoveredLink>
            ))}
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm">
                {contactItems.map((item) => (
                  <HoveredLink key={item.href} href={item.href}>
                    {item.label}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Desktop Menu */}


      {/* Mobile Menu */}
      <div className="md:hidden h-14 flex items-center justify-center bg-black p-1 border-b-2 border-white w-[100%]">
        <Link href="/">
          <TextGenerateEffect className="absolute left-0 top-3.5 bg-black" words={'Siddhartha'} size="text-xl font-bold" />
        </Link> 
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="absolute right-1">
              <MenuIcon className="h-7 w-7" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 ">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-2 py-1 text-base text-left font-medium text-white"
                  onClick={() => setShowContact(false)}
                >
                  {item.label}
                </a>
              ))}
                <h3 className="block px-2 py-1 text-base text-left font-medium text-white cursor-auto"
                onClick={() => setShowContact(!showContact)}
                >Contact</h3>
                {showContact && contactItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-1 text-sm text-gray-400 cursor-pointer ml-3"
                    onClick={() => setShowContact(false)}
                  >
                    {item.label}
                  </a>
                ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

