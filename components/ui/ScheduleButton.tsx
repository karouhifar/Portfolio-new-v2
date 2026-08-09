"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: ({ url }: { url: string }) => void;
    };
  }
}

type Props = {
  url: string; // e.g. "https://calendly.com/karouhifar/interviewing-with-kamyab"
  className?: string;
  label?: string;
  /** Extra work to run on click, e.g. closing the mobile menu. */
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function ScheduleButton({
  url,
  className,
  label = "Book a call",
  onClick,
  children,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.();
    // The widget script is lazy-loaded; fall back to the booking page directly
    // if a click lands before it is ready (or if it is blocked).
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={cn("cursor-pointer", className)}
    >
      {children ?? label}
    </button>
  );
}
