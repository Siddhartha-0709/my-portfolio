"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";


export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 md:right-10 md:left-auto max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" />
                <MenuItem setActive={setActive} active={active} item="Blogs" />
                <MenuItem setActive={setActive} active={active} item="About" />
                <MenuItem setActive={setActive} active={active} item="Projects" />
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">LinkedIn</HoveredLink>
                        <HoveredLink href="/web-dev">Twitter</HoveredLink>
                        <HoveredLink href="/web-dev">Instagram</HoveredLink>
                        <HoveredLink href="/web-dev">GitHub</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
