"use client";
import * as React from "react";

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
  children?: React.ReactNode;
};

export default function ScheduleButton({ url, children }: Props) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.Calendly?.initPopupWidget({ url });
  };

  return (
    <button
      onClick={onClick}
      aria-label="Book a call"
      className="cursor-pointer"
    >
      {children ?? "Book a call"}
    </button>
  );
}
