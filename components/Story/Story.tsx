"use client";
import React, { useId, useMemo, useState } from "react";
import SVGCard from "../ui/SVGCard";
import { FadeUp } from "../ui/FadeUp";
import { IconCloud } from "../ui/IconCloud";
import Medium from "@/public/Medium.svg";
import Icon from "@/public/Icon.svg";
import { CpuIcon } from "lucide-react";
import { BackgroundGradientAnimation } from "../ui/GradientBackground";
import MagicButton from "../ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Grid from "@/public/grid.svg";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/Terminal";
import { InViewMount } from "../ui/InViewMount";
import { AnimatedList } from "../ui/AnimatedItemList";
import Notification, { notifications } from "../Notification/Noification";
import CanadaDottedMap from "../ui/CanadaDottedMap";

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

const chips = [
  "Artificial Intelligence",
  "Azure–Databricks",
  "AWS",
  "Firebase",
  "Full-Stack",
];

const Story: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const groupId = useId();
  const images = useMemo(
    () => slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/ffffffA6`),
    []
  );

  // mobile & small screens
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20" id="story">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Responsive grid wrapper */}
        <div
          className="
            relative
            grid
            gap-6 sm:gap-8
            grid-cols-1
            sm:grid-cols-2
            sm:grid-rows-1
            md:grid-rows-3
            md:grid-cols-6
            md:auto-rows-[90px]
            lg:grid-cols-12
            lg:auto-rows-auto
          "
          style={
            {
              "--hub-size": "180px",
              "--hub-ring": "14px",
            } as React.CSSProperties
          }
        >
          {/* 1. Toolbox card (left column, tall) */}
          <FadeUp
            number={1}
            className="
              order-1 md:order-none
              sm:row-span-2
              md:col-span-3 md:row-span-2
              lg:col-span-3 lg:row-span-2
            "
          >
            <div className="grid grid-cols-4 grid-rows-[100px_1fr] rounded-3xl h-full md:h-full border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]">
              <div className="relative w-30 flex-none row-span-3 col-span-1">
                <Image
                  src={Icon}
                  alt="Cloud Icon"
                  className={cn("absolute inset-0 w-full")}
                  priority
                />
              </div>

              <div className="py-5 ml-10 col-span-3">
                <p className="font-sans text-lg lg:text-2xl font-bold text-white">
                  Toolbox
                </p>
                <p className="text-neutral-200 opacity-60">
                  What I reach for daily
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Toolbox filters"
                className="flex flex-col w-36 col-start-2 col-span-4 gap-y-5 m-2 mx-10 z-50"
              >
                {chips.map((item, i) => (
                  <React.Fragment key={`${groupId}-frag-${i}`}>
                    <button
                      role="tab"
                      className="p-1 text-xs md:text-sm rounded-xl font-medium block mb-0 ring-1 ring-white/10 bg-white/5 text-slate-200/90 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a3ff2]/50"
                    >
                      {item}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </FadeUp>
          {/* 2. Inside Scoop / SVGCard (center top wide) */}
          <FadeUp
            number={2}
            className="
              order-4 lg:order-none
              md:col-span-6 md:row-span-1
              lg:col-span-6 lg:row-span-1
            "
          >
            {isSmallScreen ? (
              <div className="relative h-full min-h-[30rem] rounded-3xl border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]">
                <div className="w-full h-full absolute left-0 top-0 overflow-hidden">
                  <Image
                    src={Grid}
                    alt="Contact Illustration"
                    className={cn(
                      "absolute right-0 bottom-0 w-full h-full",
                      "object-cover object-center"
                    )}
                    priority
                  />
                </div>

                <div className="p-4 w-full max-w-xs pt-10">
                  <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
                    <CpuIcon className="h-12 w-12 origin-left transform-gpu text-neutral-400 transition-all duration-300 ease-in-out group-hover:scale-75" />

                    <p className="text-sm max-w-lg text-neutral-200">
                      The Inside Scoop
                    </p>
                    <h3 className="font-sans text-lgl max-w-96 font-bold z-10 text-white">
                      Working on Cloud Technologies and DevOps Practices
                    </h3>
                  </div>
                </div>

                <div className="m-4">
                  <Terminal>
                    <TypingAnimation className="text-white" duration={150}>
                      $ ls
                    </TypingAnimation>
                    <AnimatedSpan delay={5800} className="text-blue-500">
                      Documents VSCode Projects
                    </AnimatedSpan>

                    <TypingAnimation className="text-white" duration={150}>
                      $ cd VSCode
                    </TypingAnimation>
                    <TypingAnimation className="text-white" duration={150}>
                      $ pwd
                    </TypingAnimation>
                    <AnimatedSpan delay={3200} className="text-green-500">
                      /home/user/VSCode
                    </AnimatedSpan>

                    <TypingAnimation className="text-white" duration={150}>
                      $ whoami
                    </TypingAnimation>
                    <AnimatedSpan delay={1700} className="text-green-500">
                      Kamyab-Rouhifar
                    </AnimatedSpan>
                  </Terminal>
                </div>
              </div>
            ) : (
              <SVGCard
                direction={isMediumScreen ? "top" : "center"}
                className="h-full min-h-[12rem]"
              />
            )}
          </FadeUp>
          {/* 3. Newsletter card (top-right small) */}
          <FadeUp
            number={3}
            className="
              order-2 lg:order-none
              md:col-span-3 md:row-span-1
              lg:col-span-3 lg:row-span-1
              overflow-hidden
            "
          >
            <div className="relative h-full min-h-[12rem] rounded-3xl border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]">
              <p className="font-sans p-6 text-lg font-bold text-white text-center lg:text-xl">
                Join My Newsletter
              </p>

              <div className="flex justify-center z-10 py-2">
                <button
                  onClick={() =>
                    window.open("https://medium.com/@karouhifar", "_blank")
                  }
                  className="px-8 py-2 pointer-events-auto cursor-pointer rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
                >
                  <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                  <span className="relative z-20">Go to Medium</span>
                </button>
              </div>

              <Image
                src={Medium}
                alt="Contact Illustration"
                className={cn(
                  "absolute -right-5 md:-right-10 bottom-5 w-32 md:w-48 opacity-20",
                  "object-cover object-center"
                )}
                priority
              />
            </div>
          </FadeUp>
          {/* 4. CTA / Project card (mid-right small) */}
          <FadeUp
            number={4}
            className="
              order-3 lg:order-none
              md:col-span-3 md:row-span-1
              lg:col-start-10 lg:col-end-13
              lg:row-start-2 lg:row-end-3
            "
          >
            <div className="relative flex h-full min-h-[12rem] flex-col -z-20">
              <BackgroundGradientAnimation>
                <p className="font-sans p-5 text-lg font-bold text-white text-center lg:text-xl">
                  Do you want to start a project together?
                </p>

                <div className="flex justify-center z-10">
                  <MagicButton
                    title={
                      copied ? "Email is Copied!" : "Copy my email address"
                    }
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={async () => {
                      if (window.isSecureContext && navigator.clipboard) {
                        const text = "karouhifar@gmail.com";
                        await navigator.clipboard.writeText(text);
                        setCopied(true);
                      }
                    }}
                    className="md:mt-5 w-full m-4 whitespace-nowrap"
                    otherClasses="!bg-[#161A31] px-2 py-2 text-xs md:text-base"
                  />
                </div>
              </BackgroundGradientAnimation>
            </div>
          </FadeUp>
          {/* 5. Central Hub / IconCloud (hidden on mobile, floats center on larger) */}
          {!isSmallScreen && (
            <FadeUp
              number={6}
              className="
                order-6 lg:order-none
                md:col-span-6 
                lg:col-start-5 lg:col-end-9
                lg:row-start-2 lg:row-end-4
              "
            >
              <div className="relative mx-auto flex w-full max-w-sm items-center justify-center rounded-lg md:max-w-xs lg:max-w-lg">
                <IconCloud images={images} />
              </div>
            </FadeUp>
          )}

          <React.Fragment>
            {" "}
            {/* 6. Bottom left wide */}
            <FadeUp
              number={5}
              className="
              order-6 lg:order-none
              md:col-span-3 md:row-span-1
              lg:col-span-3
              lg:col-start-1 lg:col-end-7
              lg:row-start-3 lg:row-end-4
            "
            >
              {!isSmallScreen ? (
                <SVGCard
                  title={"Located at North America Time Zone"}
                  direction="right"
                  className="h-full min-h-[12rem]"
                />
              ) : (
                <div className="relative h-full min-h-[12rem] rounded-3xl border border-white/5 bg-[#1D1D3B] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)]">
                  <div className="flex flex-col justify-center items-center w-full my-5">
                    <div className="py-8 pt-1 text-center">
                      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
                        <h3 className="font-sans text-lg max-w-96 font-bold z-10 text-white">
                          Showcasing My Journey in IT Fields
                        </h3>
                      </div>
                    </div>

                    <div className="w-full my-4">
                      <InViewMount delay={1000}>
                        <AnimatedList>
                          {notifications.map((item, idx) => (
                            <Notification {...item} key={idx + ""} />
                          ))}
                        </AnimatedList>
                      </InViewMount>
                    </div>
                  </div>
                </div>
              )}
            </FadeUp>
            {/* 7. Bottom right wide */}
            <FadeUp
              number={6}
              className="
              order-7 lg:order-none
              sm:col-span-2
              md:col-span-3 md:row-span-1
              lg:col-span-3
              lg:col-start-7 lg:col-end-13
              lg:row-start-3 lg:row-end-4
            "
            >
              {!isSmallScreen ? (
                <SVGCard direction="left" className="h-full min-h-[12rem]" />
              ) : (
                <div className="flex flex-col justify-center items-center w-full mt-10">
                  <div className="py-8 pt-1 text-center">
                    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
                      <h3 className="font-sans text-lg max-w-96 font-bold z-10 text-white">
                        Currently based in North America Time Zone
                      </h3>
                    </div>
                  </div>

                  <CanadaDottedMap />
                </div>
              )}
            </FadeUp>
          </React.Fragment>
        </div>
      </div>
    </section>
  );
};

export default Story;
