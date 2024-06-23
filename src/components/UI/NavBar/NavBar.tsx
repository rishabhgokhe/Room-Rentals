"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarComponent className="top-2" />
    </div>
  );
}

function NavbarComponent({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href="/">Home</a>
        <MenuItem setActive={setActive} active={active} item="Discover">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Near you</HoveredLink>
            <HoveredLink href="/interface-design">Partnership Rentals</HoveredLink>
            <HoveredLink href="/seo">Rentals Chains</HoveredLink>
            <HoveredLink href="/branding">Luxury Apartments</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Rooms</HoveredLink>
            <HoveredLink href="/interface-design">Apartments</HoveredLink>
            <HoveredLink href="/seo">Hostel</HoveredLink>
            <HoveredLink href="/branding">Resorts and Hotels</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Customer Support</HoveredLink>
            <HoveredLink href="/individual">Generate Ticket</HoveredLink>
            <HoveredLink href="/team">Chat</HoveredLink>
            <HoveredLink href="/enterprise">Email your Query</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
