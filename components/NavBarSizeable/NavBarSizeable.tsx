"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  navbarButtonStyles,
} from "@/components/ui/Navbar";
import { useState } from "react";
import ScheduleButton from "../ui/ScheduleButton";
import { siteConfig } from "@/lib/site";

const navItems = [
  { name: "Story", link: "#story" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const MOBILE_MENU_ID = "mobile-nav-menu";

export function NavBarSizeable({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="max-w-md" />
          <div className="hidden items-center gap-3 lg:flex">
            <ScheduleButton
              url={siteConfig.calendly}
              className={navbarButtonStyles("primary")}
            />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              controls={MOBILE_MENU_ID}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            id={MOBILE_MENU_ID}
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md py-1 text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3 pt-2">
              <ScheduleButton
                url={siteConfig.calendly}
                className={navbarButtonStyles("primary", "w-full")}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="mx-auto flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
