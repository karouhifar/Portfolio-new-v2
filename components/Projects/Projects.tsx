import React from "react";
import projects from "@/public/data/project.json";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicCard } from "../ui/MagicCard";
import placeholderBG from "@/public/images/bg.png";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="text-balance text-center text-2xl font-semibold text-white sm:text-4xl lg:text-5xl"
        >
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-10">
          {projects.map((item) => (
            <MagicCard
              key={item.id}
              containerClassName="col-span-1 h-full min-h-[24rem] sm:min-h-[26rem] bg-background"
              className="px-4 py-8 sm:px-8 sm:py-12"
            >
              <div className="relative mb-8 flex h-44 w-full items-center justify-center overflow-hidden rounded-3xl bg-[#13162D] sm:h-60 lg:h-72">
                <Image
                  src={placeholderBG}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
                <Image
                  src={item.image}
                  alt={`${item.title} project screenshot`}
                  width={420}
                  height={320}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 30vw"
                  className="relative z-10 h-auto w-4/5 max-w-sm rounded-2xl object-cover shadow-xl sm:w-3/4"
                />
              </div>

              <h3 className="line-clamp-1 text-lg font-semibold text-white md:text-xl lg:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 line-clamp-5 text-sm font-light text-[#BEC1DD] md:text-base lg:text-lg lg:font-normal">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <ul className="flex items-center" aria-label="Technologies used">
                  {item.technologies.map(({ url, title }, index) => (
                    <li
                      key={title}
                      className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={url}
                        fill
                        sizes="40px"
                        alt={title}
                        className="p-2"
                      />
                    </li>
                  ))}
                </ul>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-md text-sm font-medium text-purple md:text-base lg:text-lg"
                >
                  <span className="text-white">
                    Check Live Site
                    <span className="sr-only"> — {item.title}</span>
                  </span>
                  <FaLocationArrow className="text-white" aria-hidden />
                </a>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
