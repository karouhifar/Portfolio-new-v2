"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  as: Tag = "div",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  /** Rendered element — use a heading tag when this is page copy. */
  as?: "div" | "h1" | "h2" | "h3" | "p";
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
  }, [animate, filter, duration]);

  const MotionTag = motion[Tag];

  return (
    // Only phrasing content (spans) inside, so this stays valid when `as` is a heading.
    <MotionTag
      ref={scope}
      className={cn(
        "my-4 font-bold leading-snug tracking-wide text-black dark:text-white",
        className,
      )}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default TextGenerateEffect;
