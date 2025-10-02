import { cn } from "@/lib/utils";
import { CloudCog, Cpu, CpuIcon, FileStackIcon, MapPin } from "lucide-react";
import React, { ComponentPropsWithoutRef, HTMLAttributes, useId } from "react";
import { BentoCard, BentoGrid } from "./bentoGrid";
import { Globe } from "./Globe";
import Image from "next/image";
import Grid from "@/public/grid.svg";
import { AnimatedSpan, Terminal, TypingAnimation } from "./Terminal";
import { Spotlight } from "./Spotlight";

type Dir = "left" | "right" | undefined;

const features = [
  {
    Icon: MapPin,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: <div></div>,
  },
];

const SHAPES = {
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
      name: "Toronto, Canada",
      description: "Location",
      className: "col-span-3 lg:col-span-1",
      direction: "right",
      href: "#",
      cta: "Learn more",
      background: <Globe className="top-18" />,
      title: "",
    },
  },
  center: {
    w: 556,
    h: 396,
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
            <Terminal>
              <TypingAnimation delay={0}>$ ls</TypingAnimation>
              <AnimatedSpan delay={800} className="text-blue-500">
                Documents VSCode Projects
              </AnimatedSpan>
              <TypingAnimation delay={1600}>$ cd VSCode</TypingAnimation>
              <TypingAnimation delay={2400}>$ pwd</TypingAnimation>
              <AnimatedSpan delay={3200} className="text-green-500">
                /home/user/VSCode
              </AnimatedSpan>
              <TypingAnimation delay={2400}>$ whoami</TypingAnimation>
              <AnimatedSpan delay={1700} className="text-green-500">
                Kamyab-Rouhifar
              </AnimatedSpan>
            </Terminal>
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
}> = ({ direction, className, title }) => {
  const clipId = useId();
  const CLIP_ID = `${clipId}-clip`;

  const shape =
    direction === "left"
      ? SHAPES.left
      : direction === "right"
      ? SHAPES.right
      : SHAPES.center;
  const { w, h, d, evenOdd } = shape;
  return (
    <div className={cn("relative w-full h-full", className)}>
      <svg
        className={cn("absolute inset-0")}
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
