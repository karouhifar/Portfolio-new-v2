"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export type MarqueeImage = {
  /** Image URL (local public/ or remote) */
  src: string;
  /** Accessible alt text */
  alt?: string;
  /** Optional link to wrap the image */
  href?: string;
  /** Intrinsic size for next/image (required) */
  width: number;
  height: number;
  /** Preload this image */
  priority?: boolean;
  /** Rounded corners */
  rounded?: boolean;
};

type ImageMarqueeProps = {
  images: MarqueeImage[];
  /** Pixels between items */
  gap?: number;
  /** px height constraint for each item; set if your images vary a lot */
  itemMaxHeight?: number;
  /** left | right */
  direction?: "left" | "right";
  /** 20–100 is typical */
  speed?: number;
  pauseOnHover?: boolean;
  gradient?: boolean;
  gradientWidth?: number | string;
  className?: string;
  /** Render a second row mirrored in the opposite direction */
  doubleRow?: boolean;
  /** Extra class for each item wrapper */
  itemClassName?: string;
};

function Row({
  images,
  gap = 24,
  itemMaxHeight,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  gradient = true,
  gradientWidth = 64,
  className,
  itemClassName,
}: Omit<ImageMarqueeProps, "doubleRow">) {
  return (
    <Marquee
      speed={speed}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      gradientWidth={gradientWidth}
      direction={direction}
      className={className}
    >
      {images.map((img, i) => {
        const content = (
          <Image
            src={img.src}
            alt={img.alt ?? "marquee image"}
            width={img.width}
            height={img.height}
            priority={img.priority}
            draggable={false}
            style={{
              maxHeight: itemMaxHeight ? `${itemMaxHeight}px` : undefined,
              height: itemMaxHeight ? "100%" : "auto",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
            className={img.rounded ? "rounded-xl" : undefined}
          />
        );

        return (
          <span
            key={`${img.src}-${i}`}
            className={itemClassName}
            style={{ display: "inline-block", marginRight: gap }}
          >
            {img.href ? (
              <a
                href={img.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={img.alt ?? "logo"}
                style={{ display: "inline-block" }}
              >
                {content}
              </a>
            ) : (
              content
            )}
          </span>
        );
      })}
    </Marquee>
  );
}

export default function ImageMarquee({
  images,
  gap = 24,
  itemMaxHeight,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  gradient = true,
  gradientWidth = 64,
  className,
  doubleRow = false,
  itemClassName,
}: ImageMarqueeProps) {
  return (
    <div className={className}>
      <Row
        images={images}
        gap={gap}
        itemMaxHeight={itemMaxHeight}
        direction={direction}
        speed={speed}
        pauseOnHover={pauseOnHover}
        gradient={gradient}
        gradientWidth={gradientWidth}
        itemClassName={itemClassName}
      />
      {doubleRow && (
        <div style={{ marginTop: 16 }}>
          <Row
            images={images}
            gap={gap}
            itemMaxHeight={itemMaxHeight}
            direction={direction === "left" ? "right" : "left"}
            speed={speed}
            pauseOnHover={pauseOnHover}
            gradient={gradient}
            gradientWidth={gradientWidth}
            itemClassName={itemClassName}
          />
        </div>
      )}
    </div>
  );
}
