"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";
import { IoMdMail } from "react-icons/io";

type Social = { label: string; href: string; Icon: IconType };

const socials: Social[] = [
  { label: "Facebook", href: "#", Icon: FaFacebook },
  { label: "LinkedIn", href: "#", Icon: FaLinkedin },
  { label: "Instagram", href: "#", Icon: FaInstagram },
];

const fieldBase =
  "w-full rounded-xl border border-neutral-200/70 bg-white px-4 py-3 text-[15px] leading-6 text-neutral-800 placeholder:text-neutral-400 outline-none transition shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";
const labelBase = "mb-2 block text-sm font-medium text-neutral-700";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection({
  email = "info@example.com",
}: {
  email?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire to API route if needed
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <section className="mx-auto my-10 w-full max-w-6xl px-4 md:my-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] md:p-10"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Let&apos;s Talk
            </h2>

            <p className="mt-4 text-lg leading-7 text-neutral-700">
              Have some big idea or brand to develop and need help? Then reach
              out—we&apos;d love to hear about your project and provide help.
            </p>

            <div className="mt-10 space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Email
                </h3>
                <div className="mt-4 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-neutral-200 bg-white">
                    <IoMdMail className="h-6 w-6 text-neutral-700" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-neutral-500">Mail</p>
                    <a
                      href={`mailto:${email}`}
                      className="truncate text-base font-medium text-blue-600 hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Socials
                </h3>
                <div className="mt-4 flex gap-5">
                  {socials.map(({ Icon, label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="grid h-14 w-14 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:border-blue-500/50 hover:text-blue-600"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column (Form) */}
          <motion.form
            onSubmit={onSubmit}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-5"
            aria-live="polite"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelBase}>
                Name
              </label>
              <motion.input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className={fieldBase}
                whileFocus={{ boxShadow: "0 0 0 6px rgba(59,130,246,0.10)" }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelBase}>
                Email
              </label>
              <motion.input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className={fieldBase}
                whileFocus={{ boxShadow: "0 0 0 6px rgba(59,130,246,0.10)" }}
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className={labelBase}>
                Subject
              </label>
              <motion.input
                id="subject"
                name="subject"
                type="text"
                placeholder="What’s this about?"
                className={fieldBase}
                whileFocus={{ boxShadow: "0 0 0 6px rgba(59,130,246,0.10)" }}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelBase}>
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={8}
                placeholder="Write your message..."
                className={fieldBase + " resize-y"}
                whileFocus={{ boxShadow: "0 0 0 6px rgba(59,130,246,0.10)" }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 md:w-auto"
              disabled={status === "submitting" || status === "success"}
            >
              {status === "success"
                ? "Message sent ✓"
                : status === "submitting"
                ? "Sending…"
                : "Send message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
