import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import data from "@/public/data/marquee-images.json";
import React from "react";
import { NavBarSizeable } from "@/components/NavBarSizeable/NavBarSizeable";
import { BentoGridLayout } from "@/components/BentoGridLayout/BentoGridLayout";
import Footer from "@/components/Footer/Footer";
import Story from "@/components/Story/Story";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBarSizeable>
        <div className="w-full max-w-7xl h-auto">
          <Hero />
          <Story />
          <Projects />
        </div>
      </NavBarSizeable>
      <Footer />
    </div>
  );
}
