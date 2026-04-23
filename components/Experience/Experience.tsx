// app/page.tsx  (or anywhere — it's a self-contained client component)
"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  type Variants,
} from "motion/react";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  BookOpenText,
  Briefcase,
  Zap,
  Volume2,
  Mic2,
  ArrowUpRight,
  Activity,
  Flame,
  CirclePlus,
  TrendingUp,
  Waves,
  type LucideIcon,
  CpuIcon,
  LocateIcon,
  MapPin,
} from "lucide-react";
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
import { Globe } from "../ui/Globe";
import Notification, { notifications } from "../Notification/Noification";
import CanadaDottedMap from "../ui/CanadaDottedMap";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

/* ─────────── fonts ─────────── */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

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

/* ─────────── types ─────────── */
type QueueItem = {
  title: string;
  artist: string;
  dur: string;
  c1: string;
  c2: string;
};
type ActivityEntry = {
  icon: LucideIcon;
  text: string;
  track: string;
  time: string;
};
type Stat = {
  label: string;
  value: string;
  trend: string;
  unit: string;
  positive: boolean;
};

/* ─────────── sub-components ─────────── */

function Waveform({
  playedBars = 22,
  total = 48,
}: {
  playedBars?: number;
  total?: number;
}) {
  const bars = Array.from({ length: total }, (_, i) => {
    const v =
      Math.abs(Math.sin(i * 0.77) * 0.4 + Math.cos(i * 0.3) * 0.3) + 0.2;
    return { h: Math.min(100, v * 90), delay: (i % 7) * 0.13 };
  });
  return (
    <div className="mt-1 flex h-[72px] items-center gap-[3px]">
      {bars.map((b, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ scaleY: [0.25, 1, 0.25] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
          className="w-[3px] origin-center rounded-[2px]"
          style={{
            height: `${b.h}%`,
            background: i < playedBars ? "#E8B460" : "#3B3870",
            boxShadow: i < playedBars ? "0 0 6px rgba(232,180,96,0.3)" : "none",
          }}
        />
      ))}
    </div>
  );
}

/* ─────────── page ─────────── */

export default function Experience() {
  const groupId = useId();
  const [playing, setPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(42);
  const [time, setTime] = useState<Date>(new Date());
  const [vol, setVol] = useState<number>(72);
  const [mounted, setMounted] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.playbackRate = 1.5;
  }, []);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProgress((p) => (p + 0.2) % 100), 100);
    return () => clearInterval(id);
  }, [playing]);

  const pad = (n: number) => String(n).padStart(2, "0");
  const totalSec = 243; // 4:03
  const elapsed = Math.floor((progress / 100) * totalSec);

  const queue: QueueItem[] = [
    {
      title: "Glass Ceiling",
      artist: "Noa Karim",
      dur: "3:51",
      c1: "#D97757",
      c2: "#E8B460",
    },
    {
      title: "Hollow Bone",
      artist: "RIVE",
      dur: "4:22",
      c1: "#7DDCC5",
      c2: "#4A8A9E",
    },
    {
      title: "Satellite",
      artist: "Noa Karim",
      dur: "2:58",
      c1: "#B28EDB",
      c2: "#5B3E8F",
    },
  ];

  const activity: ActivityEntry[] = [
    {
      icon: Mic2,
      text: "Added vocal take 03 to ",
      track: "Phantom Limb",
      time: "2m",
    },
    {
      icon: Waves,
      text: "Remixed the low end on ",
      track: "Aurora",
      time: "24m",
    },
    {
      icon: Flame,
      text: "Mastered the final cut of ",
      track: "Midnight Choir",
      time: "1h",
    },
    {
      icon: CirclePlus,
      text: "Started new session ",
      track: "Undercurrent",
      time: "2h",
    },
  ];

  const stats: Stat[] = [
    {
      label: "Studio Hours",
      value: "184.2",
      trend: "+12%",
      unit: "h",
      positive: true,
    },
    {
      label: "Tracks Shipped",
      value: "27",
      trend: "+3",
      unit: "",
      positive: true,
    },
    {
      label: "Listeners",
      value: "42.8k",
      trend: "+8.4%",
      unit: "",
      positive: true,
    },
    { label: "Avg. BPM", value: "94", trend: "−2", unit: "", positive: false },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 + i * 0.07, duration: 0.6, ease: "easeOut" },
    }),
  };

  // shared class strings — used more than once
  const card =
    "relative flex flex-col overflow-hidden rounded-[28px] border border-[rgba(232,180,96,0.04)] bg-[#141434] p-[22px]";
  const label =
    "font-sans text-base sm:text-lg lg:text-2xl font-bold text-white";
  const divider =
    "my-[14px] h-px bg-[linear-gradient(to_right,transparent,#2A2850,transparent)]";
  const tag =
    "inline-flex items-center gap-1.5 rounded-full border border-[#2A2850] bg-[#1E1C44] px-2.5 py-1.5 text-[10px] tracking-[0.1em] text-[#8E8AB8]";
  const iconBtn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-[#2A2850] bg-[#1E1C44] text-[#F0EDE3] transition-colors hover:bg-[#2A2850]";

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <main
      className={cn(
        fraunces.variable,
        mono.variable,
        mono.className,
        "min-h-screen p-[14px] text-[#F0EDE3] antialiased",
      )}
    >
      <div className="grid min-h-[calc(100vh-70px)] gap-2.5 md:grid-rows-[5fr_6fr]">
        {/* ───── TOP ROW ───── */}
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-[1fr_1fr_2fr]">
          {/* TL — In Session */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={cn(card, "gap-[14px]")}
          >
            <FadeUp number={1}>
              <div className="flex items-center justify-between">
                <div className="pb-1.5">
                  <p className={label}>Toolbox</p>
                  <p className="inline-flex text-neutral-200 opacity-60 text-xs sm:text-sm ml-1">
                    What I reach for daily
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="w-16 sm:w-20 md:w-24 row-span-2 self-stretch">
                  <Image
                    src={Icon}
                    alt="Cloud Icon"
                    className={cn(" inset-0 w-full h-full object-contain")}
                    priority
                  />
                </div>
                <div
                  role="tablist"
                  aria-label="Toolbox filters"
                  className="col-span-2 flex flex-col gap-y-3 sm:gap-y-4 p-3 sm:p-4 md:px-5 z-50"
                >
                  {chips.map((item, i) => (
                    <React.Fragment key={`${groupId}-frag-${i}`}>
                      <button
                        role="tab"
                        className="w-full max-w-[180px] p-1 sm:p-1.5 text-xs rounded-xl font-medium block ring-1 ring-white/10 bg-white/5 text-slate-200/90 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a3ff2]/50"
                      >
                        {item}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </FadeUp>
          </motion.div>

          {/* TM — This Week */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={cn(card, "gap-2.5", "relative")}
          >
            <FadeUp number={2} className="relative">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={label}>Join My Newsletter</span>
                    <BookOpenText size={15} className="text-[#8E8AB8]" />
                  </div>
                  <p className="inline-flex text-neutral-200 opacity-60 text-xs sm:text-sm ml-1">
                    Blogs and essays on AI, tech, and creativity.
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-center gap-[2px] pt-2">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      delay: 0.3 * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex justify-center z-10 py-2">
                      <button
                        onClick={() =>
                          window.open(
                            "https://medium.com/@karouhifar",
                            "_blank",
                          )
                        }
                        className="px-6 sm:px-8 py-2 pointer-events-auto cursor-pointer rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
                      >
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Go to Medium</span>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
              <Image
                src={Medium}
                alt="Contact Illustration"
                className={cn(
                  "absolute -right-5 md:-right-10 -bottom-20 w-28 sm:w-32 md:w-72 opacity-20",
                  "object-cover object-center",
                )}
                priority
              />
            </FadeUp>
          </motion.div>

          {/* TR — Now Playing */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={cn(card, "gap-2.5")}
          >
            <div className="w-full h-full absolute left-0 top-0 overflow-hidden">
              <Image
                src={Grid}
                alt="Contact Illustration"
                className={cn(
                  "absolute right-0 bottom-0 w-full h-full",
                  "object-cover object-center",
                )}
                priority
              />
            </div>
            <FadeUp number={3}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-5">
                    <span className={label}>The Inside Scoop</span>
                    <CpuIcon size={15} className="text-[#8E8AB8]" />
                  </div>

                  <p className="inline-flex text-neutral-200 opacity-60 text-xs sm:text-sm ml-1">
                    Working on Cloud Technologies and DevOps Practices
                  </p>
                </div>
              </div>
              <div className="mx-3 mb-3 sm:mx-4 sm:my-4 grid grid-cols-4">
                <div className="col-start-2 col-span-4">
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
        <div className="relative grid grid-cols-1 gap-2.5 md:grid-cols-2 md:isolate md:z-[5]">
          {/* Circle "cutout" overlay (desktop only) — creates the 4-card curved corners */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-5px] z-[6] hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
            style={{ background: "radial-gradient(circle, #04041b, #05041A)" }}
          />
          <div className="absolute left-1/2 top-[-5px] z-[7] hidden h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full md:flex">
            <div className="relative flex h-full w-full items-center justify-center">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[108px] scale-135 object-cover"
              >
                <source
                  src={
                    "https://d32bczqlkgra6r.cloudfront.net/videos/diamond.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* BL — Activity */}

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={cn(card, "gap-[14px] mr-2")}
          >
            <FadeUp number={4}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-5">
                    <span className={label}>Experience</span>
                    <Briefcase size={15} className="text-[#8E8AB8]" />
                  </div>

                  <p className="inline-flex text-neutral-200 opacity-60 text-xs sm:text-sm ml-1">
                    Showcasing My Journey in IT Fields
                  </p>
                </div>
              </div>
              <div className=" w-full max-w-lg mt-15 mx-auto">
                <InViewMount delay={1000}>
                  <AnimatedList>
                    {notifications.map((item, idx) => (
                      <Notification {...item} key={idx + ""} />
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
              "hidden md:block",
            )}
          >
            <Image
              src={Pin}
              alt=""
              aria-hidden
              className="h-full w-full absolute left-1/2 top-4/6 -translate-x-1/2 -translate-y-1/2 "
              priority
            />

            {/* Top circle cutout — SVG cy=31 */}
            <div className="absolute -z-1 left-1/2 top-[100px] h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05041A]" />

            {/* Middle bar cutout — SVG spans y=64..92, center y=78 */}
            <div className="absolute -z-1 left-1/2 top-[165px] h-[55px] w-[35px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05041A]" />

            {/* Bottom circle cutout — SVG cy=123 */}
            <div className="absolute -z-1 left-1/2 top-[240px] h-[35px] w-[35px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05041A]" />
          </div>
          {/* BR — Stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={cn(card, "gap-[14px] ml-2")}
          >
            <div className="flex items-start justify-end mr-15">
              <div>
                <div className="flex items-center space-x-5">
                  <span className={label}>Location</span>
                  <MapPin size={15} className="text-[#8E8AB8]" />
                </div>

                <p className="inline-flex text-neutral-200 opacity-60 text-xs sm:text-sm ml-1">
                  Currently based in North America Time Zone
                </p>
              </div>
            </div>
            <div className="h-full w-full max-w-lg mt-0 md:mt-15 mx-auto">
              {!isSmallScreen ? (
                <Globe className="top-18" />
              ) : (
                <CanadaDottedMap />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden but useful — could wire into a side sheet for "up next". Kept in data for completeness. */}
      <div className="sr-only" aria-hidden>
        {queue.map((q) => (
          <span key={q.title}>{q.title}</span>
        ))}
      </div>
    </main>
  );
}
