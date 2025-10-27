import { cn } from "@/lib/utils";
import { CpuIcon, MapPin } from "lucide-react";
import React, { HTMLAttributes, useId } from "react";
import { BentoCard, BentoGrid } from "./BentoGrid";
import { Globe } from "./Globe";
import Image from "next/image";
import Grid from "@/public/grid.svg";
import { AnimatedSpan, Terminal, TypingAnimation } from "./Terminal";
import { FadeUp } from "./FadeUp";
import { AnimatedList } from "./AnimatedItemList";
import { InViewMount } from "./InViewMount";
import Notification, { notifications } from "../Notification/Noification";
import { button } from "motion/react-client";

type Dir = "left" | "right" | "center" | "top" | "bottom" | undefined;

const SHAPES = {
  top: {
    w: 1133,
    h: 412,
    // your TOP variant
    d: "M723.303 383.318C726.722 399.098 739.679 412 755.826 412H1103C1119.57 412 1133 398.569 1133 382V30C1133 13.4315 1119.57 0 1103 0H30C13.4315 0 0 13.4315 0 30V382C0 398.569 13.4315 412 30 412L372.174 412C388.321 412 401.278 399.098 404.698 383.318C420.595 309.957 485.879 255 564 255C642.121 255 707.406 309.957 723.303 383.318Z",
    evenOdd: false,
    feature: {
      Icon: MapPin,
      name: "Toronto, Canada",
      description: "Location",
      className: "col-span-3 lg:col-span-1",
      direction: "left",
      href: "#",
      cta: "Learn more",
      background: <Globe className="top-18" />,
      title: null,
    },
  },
  bottom: {
    w: 1133,
    h: 412,
    // your BOTTOM variant
    d: "M409.697 28.6823C406.278 12.9021 393.321 0 377.174 0H30C13.4315 0 0 13.4315 0 30V382C0 398.569 13.4314 412 30 412H1103C1119.57 412 1133 398.569 1133 382V30C1133 13.4315 1119.57 0 1103 0L760.826 0C744.679 0 731.722 12.9021 728.302 28.6822C712.405 102.043 647.121 157 569 157C490.879 157 425.594 102.043 409.697 28.6823Z",
    evenOdd: false,
    feature: {
      Icon: MapPin,
      name: "Toronto, Canada",
      description: "Location",
      className: "col-span-3 lg:col-span-1",
      direction: "left",
      href: "#",
      cta: "Learn more",
      background: <Globe className="top-18" />,
      title: null,
    },
  },
  left: {
    w: 554,
    h: 412,
    // same shape you had for the LEFT variant
    d: "M554 382C554 398.569 540.569 412 524 412H30C13.4315 412 0 398.569 0 382V182.961C0 167.378 12.0552 154.683 27.1366 150.762C85.9726 135.464 131.883 88.1238 145.123 28.486C148.608 12.7921 161.533 0 177.609 0H524C540.569 0 554 13.4315 554 30V382Z",
    evenOdd: false,
    feature: {
      Icon: MapPin,
      name: "Toronto, Canada",
      description: "Location",
      className: "col-span-3 lg:col-span-1",
      direction: "left",
      href: "#",
      cta: "Learn more",
      background: <Globe className="top-18" />,
      title: "Currently based in North America Time Zone",
    },
  },
  right: {
    w: 554,
    h: 412,
    // same shape you had for the RIGHT variant
    d: "M409.697 28.679C406.278 12.8988 393.321 0 377.174 0H30C13.4315 0 0 13.4315 0 30V382C0 398.569 13.4315 412 30 412H524C540.569 412 554 398.569 554 382V183.706C554 168.194 542.049 155.534 527.056 151.553C468.342 135.962 422.642 88.4236 409.697 28.679Z",
    evenOdd: true,
    feature: {
      Icon: MapPin,
      name: "Showcasing My Journey in IT Fields",
      description: "Experience",
      className: "col-span-3 lg:col-span-1",
      direction: "right",
      href: "#",
      cta: "Learn more",
      background: (
        <div className="absolute left-15 top-0 w-full max-w-xs my-5 mx-auto">
          <InViewMount delay={1000}>
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx + ""} />
              ))}
            </AnimatedList>
          </InViewMount>
        </div>
      ),
      title: "",
    },
  },
  center: {
    w: 556,
    h: 962,
    // your CENTER (default) variant
    d: "M556 30C556 13.4315 542.569 0 526 0H30C13.4315 0 0 13.4315 0 30V366C0 382.569 13.4315 396 30 396H90.2477C105.266 396 117.68 384.766 122.06 370.4C142.425 303.599 204.537 255 278 255C351.463 255 413.575 303.599 433.94 370.4C438.32 384.766 450.734 396 465.752 396H526C542.569 396 556 382.569 556 366V30Z",
    evenOdd: true,
    feature: {
      Icon: CpuIcon,
      name: "Working on Cloud Technologies and DevOps Practices",
      description: "The Inside Scoop",
      className: "col-span-3 lg:col-span-1 flex-col-reverse",
      direction: "center",
      href: "#",
      cta: "Learn more",
      background: (
        <>
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

          <div className="absolute -right-2 top-5">
            <FadeUp number={7}>
              <Terminal>
                <TypingAnimation duration={150}>$ ls</TypingAnimation>
                <AnimatedSpan delay={5800} className="text-blue-500">
                  Documents VSCode Projects
                </AnimatedSpan>
                <TypingAnimation duration={150}>$ cd VSCode</TypingAnimation>
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
        </>
      ),
      title: "",
    },
  },
};

const SVGCard: React.FC<{
  radius?: number; // kept for API compatibility if you later parametrize shapes
  direction?: Dir;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}> = ({ direction, className }) => {
  const clipId = useId();

  const CLIP_ID = `${clipId}-clip`;

  const shape =
    direction === "left"
      ? SHAPES.left
      : direction === "right"
      ? SHAPES.right
      : direction === "center"
      ? SHAPES.center
      : direction === "top"
      ? SHAPES.top
      : SHAPES.bottom;
  const { w, h, d, evenOdd } = shape;
  return (
    <div className={cn("relative w-full h-full", className)}>
      <svg
        className={cn("absolute inset-0 ")}
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background shape */}
        <path
          d={d}
          fill="#1D1D3B"
          fillRule={evenOdd ? "evenodd" : undefined}
          clipRule={evenOdd ? "evenodd" : undefined}
        />
        {/* Soft inner outline (replaces mask hack) */}
        <path d={d} fill="none" stroke="white" strokeOpacity={0.06} />

        {/* ClipPath so the foreignObject content respects the curved cutouts */}
        <defs>
          <clipPath id={CLIP_ID}>
            <path
              d={d}
              fill="white"
              fillRule={evenOdd ? "evenodd" : undefined}
              clipRule={evenOdd ? "evenodd" : undefined}
            />
          </clipPath>
        </defs>

        {/* HTML/React content layer */}
        <foreignObject
          x="0"
          y="0"
          width={w}
          height={h}
          clipPath={`url(#${CLIP_ID})`}
        >
          <div
            {...({
              xmlns: "http://www.w3.org/1999/xhtml",
            } as HTMLAttributes<HTMLDivElement>)}
            className="flex h-full w-full items-center justify-center bg-transparent text-white"
          >
            <BentoGrid>
              {Object.keys(shape.feature).length > 0 && (
                <BentoCard {...(shape.feature as any)} />
              )}
            </BentoGrid>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SVGCard;
