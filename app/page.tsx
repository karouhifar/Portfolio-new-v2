import Hero from "@/components/Hero/Hero";
import React from "react";
import { NavBarSizeable } from "@/components/NavBarSizeable/NavBarSizeable";

import Footer from "@/components/Footer/Footer";
import Story from "@/components/Story/Story";
import Projects from "@/components/Projects/Projects";
import ContactSection from "@/components/Contact/Contact";
import { FadeUp } from "@/components/ui/FadeUp";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBarSizeable>
        <div className="w-full max-w-7xl space-y-16 lg:space-y-24">
          <FadeUp amount={0.75}>
            <Hero />
          </FadeUp>
          <FadeUp amount={0.45}>
            <Story />
          </FadeUp>
          <FadeUp amount={0.15}>
            <Projects />
          </FadeUp>
          <FadeUp amount={0.25}>
            <ContactSection />
          </FadeUp>
        </div>
      </NavBarSizeable>
      <Footer />
    </div>
  );
}
