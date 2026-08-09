import React from "react";
import Image from "next/image";
import { Spotlight } from "../ui/Spotlight";
import TextGenerateEffect from "../ui/textGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import hero from "@/public/images/hero-profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-background/60 pb-16 pt-28 sm:pb-20 md:pt-36"
    >
      {/*
        Full-bleed spotlight layer. The hero itself sits inside a centred
        max-w-7xl column, so the glows are pulled out to the full viewport
        width (w-screen, re-centred) and cover the section's whole height.
        `overflow-hidden` keeps them from widening the document.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-screen -translate-x-1/2 overflow-hidden"
      >
        <Spotlight
          className="-left-[25%] -top-[30%] h-[130%] w-[110%] sm:-left-[15%] lg:-left-[10%] lg:w-[75%]"
          fill="white"
        />
        <Spotlight
          className="-top-[10%] left-[35%] h-[120%] w-[100%] lg:left-[45%] lg:w-[70%]"
          fill="purple"
        />
        <Spotlight
          className="left-[5%] top-[15%] h-[110%] w-[95%] lg:left-[15%] lg:w-[65%]"
          fill="blue"
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-10">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <TextGenerateEffect
                as="h1"
                words="Engineering Concepts From Ambitious Ideas"
                className="text-balance text-[28px] leading-tight sm:text-[34px] md:text-5xl md:leading-[1.1] lg:text-6xl"
              />

              <p className="mx-auto mt-4 max-w-3xl text-sm/loose text-white md:text-base/loose lg:text-xl/loose">
                Hi! I&apos;m Kamyab Rouhifar, a Cloud &amp; Full-stack
                Application Developer.
                <span className="block text-sm opacity-70">
                  Toronto, Canada
                </span>
              </p>

              <p className="mx-auto mt-2 max-w-[90%] text-center text-[11px] uppercase tracking-widest text-blue-100 opacity-80 sm:text-xs lg:mx-0 lg:text-left">
                Dynamic web application powered by Next.js
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-block w-full max-w-xs rounded-lg md:w-auto md:max-w-none"
                >
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow aria-hidden />}
                    position="right"
                  />
                </a>
              </div>
            </div>

            {/* Portrait */}
            <div className="order-first lg:order-none">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl sm:max-w-xl lg:ml-auto lg:aspect-square lg:max-w-none">
                <Image
                  src={hero}
                  alt="Portrait of Kamyab Rouhifar, Cloud and Full-stack Application Developer"
                  fill
                  className="
                    rounded-2xl object-cover object-top
                    [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
                  "
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
