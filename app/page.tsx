import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import data from "@/public/data/marquee-images.json";
import React from "react";
import { NavBarSizeable } from "@/components/NavBarSizeable/NavBarSizeable";
import { BentoGridLayout } from "@/components/BentoGridLayout/BentoGridLayout";
import Footer from "@/components/Footer/Footer";
import PromptPalLayout from "@/components/demo/Demo";

export default function Home() {
  return (
    <React.Fragment>
      <NavBarSizeable>
        <div className="w-full max-w-7xl h-auto">
          <Hero />
          <PromptPalLayout />
        </div>
      </NavBarSizeable>
      <Footer />
    </React.Fragment>
  );
}
