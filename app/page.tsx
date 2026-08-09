import Hero from "@/components/Hero/Hero";
import React from "react";
import dynamic from "next/dynamic";
import { NavBarSizeable } from "@/components/NavBarSizeable/NavBarSizeable";
import { FadeUp } from "@/components/ui/FadeUp";

const Experience = dynamic(() => import("@/components/Experience/Experience"), {
  loading: () => <div className="min-h-[40rem]" />,
});

const Projects = dynamic(() => import("@/components/Projects/Projects"), {
  loading: () => <div className="min-h-[40rem]" />,
});
const ContactSection = dynamic(() => import("@/components/Contact/Contact"), {
  loading: () => <div className="min-h-[30rem]" />,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <div className="min-h-[20rem]" />,
});

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBarSizeable>
        <div className="w-full max-w-7xl space-y-16 lg:space-y-24">
          {/* blur={false}: these wrappers span whole viewports, where animating
              a blur filter repaints far too much per frame.
              Low `amount` values matter here — these sections are taller than a
              phone viewport, so a high threshold can never be met and the
              section would stay at opacity 0 forever. */}
          <FadeUp amount={0.15} blur={false}>
            <Hero />
          </FadeUp>
          <FadeUp amount={0.15} blur={false}>
            <Experience />
          </FadeUp>
          <FadeUp amount={0.15} blur={false}>
            <Projects />
          </FadeUp>
          <FadeUp amount={0.15} blur={false}>
            <ContactSection />
          </FadeUp>
        </div>
      </NavBarSizeable>
      <Footer />
    </div>
  );
}
