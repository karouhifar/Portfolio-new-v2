// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import type { IconType } from "react-icons";
import Image from "next/image";
import logo from "@/public/images/logo.png";

type Social = {
  href: string;
  label: string;
  Icon: IconType;
};

const SOCIALS: Social[] = [
  { href: "#", label: "Instagram", Icon: FaInstagram },
  { href: "#", label: "X (Twitter)", Icon: FaXTwitter },
  { href: "#", label: "GitHub", Icon: FaGithub },
  { href: "#", label: "LinkedIn", Icon: FaLinkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Background: deep navy + grid + soft glow */}
      <div
        className="absolute inset-0 -top-10 -z-10"
        style={{
          backgroundColor: "#0b0d17",
          backgroundImage: `
            radial-gradient(900px 300px at 50% -10%, rgba(139, 92, 246, 0.18), transparent 60%),
            radial-gradient(600px 240px at 18% 78%, rgba(59, 130, 246, 0.14), transparent 60%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 64px 64px, 64px 64px",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 md:py-10">
        <Image
          src={logo}
          alt="Kamyab Rouhifar"
          width={180}
          height={40}
          className=" mb-8"
        />
        <h2 className="mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Ready to take{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-violet-400 bg-clip-text text-transparent">
            your
          </span>{" "}
          digital
          <br className="hidden sm:block" /> presence to the next level?
        </h2>

        <p className="mb-10 max-w-2xl text-balance text-white/70">
          Reach out and let’s chat about how I can help you hit your goals.
        </p>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-white/90 shadow-lg backdrop-blur transition hover:bg-white/15"
        >
          Contact Me Now
          <HiPhoneArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 pb-8 text-center sm:px-6 md:flex-row md:gap-0 md:text-left">
        <p className="text-sm text-white/60">
          Copyright ©{year}{" "}
          <span className="text-white/80">Kamyab Rouhifar</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/80 shadow-sm backdrop-blur transition hover:bg-white/10 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Soft vignette at the very bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/40 to-transparent" />
    </footer>
  );
}
