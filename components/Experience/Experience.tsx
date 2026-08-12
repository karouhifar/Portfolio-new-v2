"use client";

import { useCallback, useId } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { JetBrains_Mono } from "next/font/google";
import { BookOpenText, Briefcase, CpuIcon, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeUp } from "../ui/FadeUp";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/Terminal";
import Icon from "@/public/Icon.svg";
import Pin from "@/public/pin.svg";
import Medium from "@/public/Medium.svg";
import Grid from "@/public/grid.svg";
import React from "react";
import { InViewMount } from "../ui/InViewMount";
import { AnimatedList } from "../ui/AnimatedItemList";
import { TextSpinner } from "../ui/TextSpinner";
import { Globe } from "../ui/Globe";
import Notification, { notifications } from "../Notification/Noification";
import CanadaDottedMap from "../ui/CanadaDottedMap";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { siteConfig } from "@/lib/site";

/* ─────────── fonts ─────────── */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const chips = [
  "Artificial Intelligence",
  "Azure–Databricks",
  "AWS",
  "Firebase",
  "Full-Stack",
];

/**
 * Decorative binary ring copy. Generated deterministically — a Math.random()
 * version rendered different text on the server and the client, which is a
 * hydration mismatch.
 */
const RING_TEXT = Array.from({ length: 10 }, (_, chunk) =>
  Array.from({ length: (chunk % 5) + 2 }, (_, bit) =>
    (chunk + bit) % 3 === 0 ? "1" : "0",
  ).join(""),
).join(" ");

export default function Experience() {
  const groupId = useId();

  // Callback ref rather than useRef + useEffect: the <video> mounts later than
  // this component (only once the media query resolves to desktop), so a
  // mount-time effect would run while the ref is still null.
  const setVideoRate = useCallback((node: HTMLVideoElement | null) => {
    if (node) node.playbackRate = 1.5;
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 + i * 0.07, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Cards sit well below the fold, so they enter on scroll rather than on mount.
  const cardMotion = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants: cardVariants,
  } as const;

  // shared class strings — used more than once
  const card =
    "relative flex flex-col overflow-hidden rounded-[28px] border border-[rgba(232,180,96,0.04)] bg-[#141632] p-5 sm:p-[22px]";
  const label =
    "font-sans text-base sm:text-lg lg:text-2xl font-bold text-white";
  const subLabel =
    "inline-flex text-neutral-200 opacity-60 text-xs sm:text-sm ml-1";

  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className={cn(
        mono.variable,
        mono.className,
        "w-full p-[14px] text-[#F0EDE3] antialiased lg:min-h-screen",
      )}
    >
      {/* Visually hidden: the cards below carry their own h3s, but the section
          still needs an h2 so the outline stays h1 → h2 → h3. */}
      <h2 id="story-heading" className="sr-only">
        About Kamyab Rouhifar — toolbox, writing, experience and location
      </h2>

      <div className="grid gap-y-3.5 space-y-3 lg:min-h-[calc(100vh-70px)] lg:grid-rows-[5fr_6fr]">
        {/* ───── TOP ROW ───── */}
        <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[1fr_1fr_2fr]">
          {/* TL — Toolbox */}
          <motion.div
            {...cardMotion}
            custom={0}
            className={cn(card, "gap-[14px]")}
          >
            <FadeUp number={1}>
              <div className="flex items-center justify-between">
                <div className="pb-1.5">
                  <h3 className={label}>Toolbox</h3>
                  <p className={subLabel}>What I reach for daily</p>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="row-span-2 w-16 self-stretch sm:w-20 lg:w-24">
                  <Image
                    src={Icon}
                    alt=""
                    aria-hidden
                    className="inset-0 h-full w-full object-contain"
                  />
                </div>
                {/* Static capability chips — not tabs, so no tablist roles. */}
                <ul className="z-10 col-span-2 flex flex-col gap-y-3 p-3 sm:gap-y-4 sm:p-4 lg:px-5">
                  {chips.map((item, i) => (
                    <li key={`${groupId}-chip-${i}`}>
                      <span className="block w-full max-w-[180px] rounded-xl bg-white/5 p-1 text-xs font-medium text-slate-200/90 ring-1 ring-white/10 sm:p-1.5">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </motion.div>

          {/* TM — Newsletter */}
          <motion.div
            {...cardMotion}
            custom={1}
            className={cn(card, "relative gap-2.5 lg:mr-3")}
          >
            <FadeUp number={2} className="relative">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className={label}>Join My Newsletter</h3>
                    <BookOpenText size={15} className="text-[#8E8AB8]" />
                  </div>
                  <p className={subLabel}>
                    Blogs and essays on AI, tech, and creativity.
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-center gap-[2px] pt-2">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="z-10 flex justify-center py-2">
                      <a
                        href={siteConfig.socials.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto relative cursor-pointer rounded-full border border-slate-600 bg-slate-700 px-6 py-2 text-sm text-white transition duration-200 hover:shadow-2xl hover:shadow-white/[0.1] sm:px-8"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-2xl"
                        />
                        <span className="relative z-20">Go to Medium</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
              <Image
                src={Medium}
                alt=""
                aria-hidden
                className="absolute -bottom-20 -right-5 w-28 object-cover object-center opacity-20 sm:w-32 lg:-right-10 lg:w-72"
              />
            </FadeUp>
          </motion.div>

          {/* TR — The Inside Scoop */}
          <motion.div
            {...cardMotion}
            custom={2}
            className={cn(card, "gap-2.5 lg:ml-3")}
          >
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
              <Image
                src={Grid}
                alt=""
                aria-hidden
                className="absolute bottom-0 right-0 h-full w-full object-cover object-center"
              />
            </div>
            <FadeUp number={3}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-5">
                    <h3 className={label}>The Inside Scoop</h3>
                    <CpuIcon size={15} className="text-[#8E8AB8]" />
                  </div>

                  <p className={subLabel}>
                    Working on Cloud Technologies and DevOps Practices
                  </p>
                </div>
              </div>
              <div className="mx-3 mb-3 grid grid-cols-4 sm:mx-4 sm:my-4">
                {/* Was col-start-2/col-span-4 in a 4-column grid, which created a
                    5th implicit column and overflowed the card. */}
                <div className="col-span-4 sm:col-start-2 sm:col-span-3">
                  <FadeUp number={7}>
                    <Terminal>
                      <TypingAnimation duration={150}>$ ls</TypingAnimation>
                      <AnimatedSpan delay={5800} className="text-blue-500">
                        Documents VSCode Projects
                      </AnimatedSpan>
                      <TypingAnimation duration={150}>
                        $ cd VSCode
                      </TypingAnimation>
                      <TypingAnimation duration={150}>$ pwd</TypingAnimation>
                      <AnimatedSpan delay={3200} className="text-green-500">
                        /home/user/VSCode
                      </AnimatedSpan>
                      <TypingAnimation duration={150}>$ whoami</TypingAnimation>
                      <AnimatedSpan delay={1700} className="text-green-500">
                        Kamyab-Rouhifar
                      </AnimatedSpan>
                    </Terminal>
                  </FadeUp>
                </div>
              </div>
            </FadeUp>
          </motion.div>
        </div>

        {/* ───── BOTTOM ROW ───── */}
        <div className="relative grid grid-cols-1 gap-2.5 lg:isolate lg:z-[5] lg:grid-cols-2">
          {/* Circle "cutout" overlay (desktop only) — creates the 4-card curved corners */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-5px] z-[6] hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:block"
            style={{ background: "radial-gradient(circle, #04041b, #05041A)" }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 -top-2 z-50 hidden h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 mask-l-from-70% mask-l-to-86% mask-r-from-70% mask-r-to-86% lg:flex"
          >
            <TextSpinner
              className="font-press text-xs tracking-[0.35em] h-full w-full text-[#ACA0E4]"
              radius={11.5}
            >
              {RING_TEXT}
            </TextSpinner>
          </div>
          {/*
            Mounted only on >=lg. `hidden lg:flex` alone is not enough — a
            display:none <video> is still fetched by the browser, so phones
            were paying for a 23 MB decorative clip they never see. Rendering
            nothing until the media query resolves keeps it off the network on
            mobile entirely (and out of the SSR HTML).
          */}
          {isSmallScreen === false && (
            <div
              aria-hidden
              className="absolute left-1/2 top-[-5px] z-[7] hidden h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full lg:flex"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <video
                  ref={setVideoRate}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[108px] scale-135 object-cover"
                >
                  <source
                    src={"https://cdn.dreamsdigital.ca/videos/diamond.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          )}

          {/* BL — Experience */}
          <motion.div
            {...cardMotion}
            custom={3}
            className={cn(card, "gap-[14px] lg:mr-2")}
          >
            <FadeUp number={4}>
              <div className="flex items-start justify-between">
                {/* Capped between lg and xl so the copy wraps instead of
                    sliding under the 300px decorative circle centred on the
                    seam between these two cards. */}
                <div className="lg:max-w-[290px] xl:max-w-none">
                  <div className="flex items-center space-x-5">
                    <h3 className={label}>Experience</h3>
                    <Briefcase size={15} className="text-[#8E8AB8]" />
                  </div>

                  <p className={subLabel}>Showcasing My Journey in IT Fields</p>
                </div>
              </div>
              <div className="mx-auto mt-8 w-full max-w-lg lg:mt-15">
                <InViewMount delay={1000}>
                  <AnimatedList>
                    {notifications.map((item) => (
                      <Notification {...item} key={item.name} />
                    ))}
                  </AnimatedList>
                </InViewMount>
              </div>
            </FadeUp>
          </motion.div>

          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2 z-[13]",
              "h-[255px] w-[100px] -translate-x-1/2 -translate-y-1/2",
              "hidden lg:block",
            )}
          >
            <Image
              src={Pin}
              alt=""
              aria-hidden
              className="absolute left-1/2 top-4/6 h-full w-full -translate-x-1/2 -translate-y-1/2"
            />

            {/* Top circle cutout — SVG cy=31 */}
            <div className="absolute -z-1 left-1/2 top-[100px] h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05041A]" />

            {/* Middle bar cutout — SVG spans y=64..92, center y=78 */}
            <div className="absolute -z-1 left-1/2 top-[165px] h-[55px] w-[35px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05041A]" />

            {/* Bottom circle cutout — SVG cy=123 */}
            <div className="absolute -z-1 left-1/2 top-[240px] h-[35px] w-[35px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05041A]" />
          </div>

          {/* BR — Location */}
          <motion.div
            {...cardMotion}
            custom={4}
            className={cn(card, "gap-[14px] lg:ml-2")}
          >
            <div className="flex items-start justify-start lg:mr-15 lg:justify-end">
              <div className="lg:max-w-[240px] xl:max-w-none">
                <div className="flex items-center space-x-5 lg:justify-end">
                  <h3 className={label}>Location</h3>
                  <MapPin size={15} className="shrink-0 text-[#8E8AB8]" />
                </div>

                <p className={cn(subLabel, "lg:text-right")}>
                  Currently based in North America Time Zone
                </p>
              </div>
            </div>
            <div className="relative mx-auto mt-0 h-full min-h-[220px] w-full max-w-lg lg:mt-15">
              {/* undefined until measured — avoids booting the WebGL globe on
                  phones just to replace it with the map a frame later. */}
              {isSmallScreen === undefined ? null : isSmallScreen ? (
                <CanadaDottedMap />
              ) : (
                <Globe className="top-18" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
