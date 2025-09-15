import React from "react";
import projects from "@/public/data/project.json";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicCard } from "../ui/MagicCard";
import placeholder from "@/public/images/placeholder.jpg";
import placeholderBG from "@/public/images/bg.png";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto w-full">
        {projects.map((item) => (
          <MagicCard
            key={item.id}
            containerClassName="col-span-1 h-full bg-primary min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="relative flex items-center justify-center sm:w-full w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <Image src={placeholderBG} alt="cover" />
              </div>
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {item.title}
            </h1>
            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-5"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.description}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {item.technologies.map(({ title, url }, index) => (
                  <div
                    key={index + ""}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={url} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#fff" />
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
