import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import logo_1 from "@/public/images/logo_1.png";
import logo_2 from "@/public/images/logo_2.webp";
import logo_3 from "@/public/images/logo_3.png";

interface Item {
  name: string;
  description: string;
  image: StaticImageData;
  color: string;
  date: string;
}

export const notifications = [
  {
    name: "DoubleClick Lending",
    description: "Full-stack Developer",
    date: "Jun 2021 - Sep 2021",
    image: logo_1,
    color: "#FFFFFF",
  },
  {
    name: "Viral Nation",
    description: "Software Engineer",
    date: "Jun 2022 - Aug 2023",
    image: logo_2,
    color: "#FFFFFF",
  },
  {
    name: "CIBC",
    description: "Senior Application Developer",
    date: "Sep 2025 - Present",
    image: logo_3,
    color: "#FFFFFF",
  },
];
const Notification = ({ name, description, image, color, date }: Item) => {
  return (
    <div
      className={cn(
        "relative mx-2  min-h-fit w-full max-w-[400px] cursor-pointer  rounded-2xl p-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
          />
        </div>
        <div className="flex flex-col overflow-hidden space-y-1">
          <figcaption className="flex flex-col text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-md">{name}</span>

            <span className="text-xs text-gray-500">{date}</span>
          </figcaption>
          <p className="text-xs font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Notification;
