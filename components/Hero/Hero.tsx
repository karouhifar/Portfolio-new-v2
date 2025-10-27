"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "../ui/Spotlight";
import TextGenerateEffect from "../ui/textGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import hero from "@/public/images/hero-profile.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-background/60 pb-20 pt-28 md:pt-36">
      <div className="overflow-x-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <TextGenerateEffect
                words="Engineering Concepts From Ambitious Ideas"
                className="text-balance text-[34px] leading-tight md:text-5xl md:leading-[1.1] lg:text-6xl"
              />

              <p className="mx-auto mt-4 max-w-3xl text-sm/loose text-white md:text-base/loose lg:text-xl/loose">
                Hi! I&apos;m Kamyab Rouhifar, a Cloud &amp; Full-stack
                Application Developer.
                <span className="block text-sm opacity-70">
                  Toronto, Canada
                </span>
              </p>

              <p className="mx-auto mt-2 max-w-[90%] text-center text-xs uppercase tracking-widest text-blue-100 opacity-80 lg:mx-0 lg:text-left">
                Dynamic web application powered by Next.js
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                <a href="#about">
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="order-first lg:order-none">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl sm:max-w-xl lg:ml-auto lg:max-w-none lg:aspect-square">
                {/* 
                  Replace src with your image path.
                  If using a remote image, add the domain to next.config.js images.domains.
                */}
                <Image
                  src={hero}
                  alt="Right-profile portrait of Kamyab Rouhifar"
                  className="
              
          w-full block rounded-2xl
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
