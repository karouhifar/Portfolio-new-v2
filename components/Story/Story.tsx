"use client";
import React, { useMemo, useState } from "react";
import SVGCard from "../ui/SVGCard";
import { FadeUp } from "../ui/FadeUp";
import { IconCloud } from "../ui/IconCloud";
import { SiJavascript, SiNodedotjs, SiReact } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { BentoCard, BentoGrid } from "../ui/bentoGrid";
import { MapPin } from "lucide-react";
import { BackgroundGradientAnimation } from "../ui/GradientBackground";
import MagicButton from "../ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const slugs = [
  "databricks",
  "tailwindcss",
  "apachehive",
  "python",
  "django",
  "dotnet",
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Story: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const images = useMemo(
    () => slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/ffffffA6`),
    []
  );
  return (
    <div className="w-full py-6 md:h-[57rem]">
      <div className="mx-auto max-w-7xl">
        {/* The grid */}
        <div
          className="relative grid gap-10 md:[grid-template-columns:repeat(12,minmax(0,1fr))] md:[grid-template-rows:repeat(3,200px)]"
          // Control hub size and border thickness with CSS vars for easy tuning
          style={
            {
              "--hub-size": "180px",
              "--hub-ring": "14px",
            } as React.CSSProperties
          }
        >
          {/* Left tall (spans two rows) */}
          <FadeUp number={1} className="md:col-span-3 md:row-span-2 ">
            <div className="rounded-3xl h-48 md:h-full border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]" />
          </FadeUp>
          {/* Top center wide */}
          <FadeUp number={2} className="md:col-span-6 md:row-span-1">
            <SVGCard className="h-48  md:h-full" />
          </FadeUp>
          {/* Top-right small */}
          <FadeUp number={3} className="md:col-span-3 md:row-span-1">
            <div className="h-48  md:h-full rounded-3xl border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]" />
          </FadeUp>
          {/* Mid-right small */}
          <FadeUp
            number={4}
            className="md:col-start-10 md:col-end-13 md:row-start-2 md:row-end-3"
          >
            <div className="relative h-48 flex flex-col ">
              <BackgroundGradientAnimation>
                <p
                  className={`font-sans text-lg lg:text-xl p-5 font-bold  text-white text-center`}
                >
                  Do you want to start a project together?
                </p>
                <div className="flex justify-center z-10 ">
                  <MagicButton
                    title={
                      copied ? "Email is Copied!" : "Copy my email address"
                    }
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={() => {
                      const text = "karouhifar@gmail.com";
                      navigator.clipboard.writeText(text);
                      setCopied(true);
                    }}
                    className="md:mt-5"
                    otherClasses="!bg-[#161A31]"
                  />
                </div>
              </BackgroundGradientAnimation>
            </div>
          </FadeUp>
          <FadeUp
            number={6}
            className="md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-4"
          >
            {/* CENTRAL HUB (creates the inverted-radius illusion by sitting above the cards) */}
            <div className="relative flex size-full max-w-lg items-center justify-center rounded-lg">
              <IconCloud images={images} />
            </div>
          </FadeUp>
          {/* Bottom left wide */}
          <FadeUp
            number={5}
            className="md:col-start-1 md:col-end-7 md:row-start-3 md:row-end-4 "
          >
            <SVGCard
              title={"Located at North America Time Zone"}
              direction="right"
              className="h-48  md:h-full"
            />
          </FadeUp>
          {/* Bottom right wide */}
          <FadeUp
            number={6}
            className="md:col-start-7 md:col-end-13 md:row-start-3 md:row-end-4"
          >
            <SVGCard direction="left" className="h-48  md:h-full" />
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

export default Story;
