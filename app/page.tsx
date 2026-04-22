import Hero from "@/components/Hero/Hero";
import React from "react";
import dynamic from "next/dynamic";
import { NavBarSizeable } from "@/components/NavBarSizeable/NavBarSizeable";
import { FadeUp } from "@/components/ui/FadeUp";

const Story = dynamic(() => import("@/components/Story/Story"), {
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
