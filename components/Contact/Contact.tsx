"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";
import GlassEffect from "../ui/GlassEffect";
import CNtower from "@/public/images/cntower.png";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

type Social = { label: string; href: string; Icon: IconType };

interface Shape {
  color: string;
  size: number;
  x: number;
  y: number;
  initialScale: number;
  initialRotate: number;
  duration: number;
  delay: number;
}

const socials: Social[] = [
  { label: "Facebook", href: "#", Icon: FaFacebook },
  { label: "LinkedIn", href: "#", Icon: FaLinkedin },
  { label: "Instagram", href: "#", Icon: FaInstagram },
];

const fieldBase =
  "w-full px-4 py-3 bg-indigo-900/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors";
const labelBase = "block mb-2 text-sm font-medium text-gray-900 text-white";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection({}: { email?: string }) {
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

  const AnimatedShape: React.FC<{ shape: Shape }> = ({ shape }) => {
    const { color, size, x, y, initialScale, initialRotate, duration, delay } =
      shape;

    const getShapeStyles = () => {
      const baseStyles = {
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute" as const,
        left: `${x}%`,
        top: `${y}%`,
        filter: "blur(40px)",
        zIndex: -1,
      };
      return { ...baseStyles, backgroundColor: color };
    };

    return (
      <motion.div
        style={getShapeStyles()}
        initial={{ scale: initialScale, rotate: initialRotate }}
        whileInView={{
          y: [0, 30, -30, 0],
          x: [0, 20, -20, 0],
          scale: [
            initialScale,
            initialScale * 1.2,
            initialScale * 0.8,
            initialScale,
          ],
          rotate: [
            initialRotate,
            initialRotate + 20,
            initialRotate - 20,
            initialRotate,
          ],
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay,
        }}
      />
    );
  };

  return (
    <section className="mx-auto my-10 w-full md:my-16">
      {/* Background: deep navy + grid + soft glow */}
      <div className="absolute inset-0 -z-0">
        <AnimatePresence>
          <AnimatedShape
            shape={{
              color: "rgba(59, 130, 246, 0.5)",
              size: 150,
              x: 0,
              y: -15,
              initialScale: 1,
              initialRotate: 45,
              duration: 20,
              delay: 0,
            }}
          />
          <AnimatedShape
            shape={{
              color: "rgba(139, 92, 246, 0.3)",
              size: 120,
              x: 95,
              y: 45,
              initialScale: 0.7,
              initialRotate: 120,
              duration: 15,
              delay: 0,
            }}
          />
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassEffect>
          <div className="h-full ">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-200/[0.2] z-50">
              {/* Left column */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="max-w-xl px-4 py-10 sm:px-10"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                <h2 className="text-3xl tracking-tight font-bold sm:text-4xl">
                  Let&apos;s Talk
                </h2>

                <p className="mt-4 text-lg leading-7 ">
                  Have some big idea or brand to develop and need help? Then
                  reach out—we&apos;d love to hear about your project and
                  provide help.
                </p>
                <div className=""></div>
                <div className="mt-10 space-y-8">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-purple-800/10 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 mb-8 max-w-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600/40 rounded-xl flex items-center justify-center">
                        <MdOutlineEmail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          Email
                        </p>
                        <p className="text-gray-300">karouhifar@gmail.com</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Socials */}
                  <div>
                    <h3 className="text-lg font-semibold">Socials</h3>
                    <div className="mt-4 flex gap-5">
                      {socials.map(({ Icon, label, href }) => (
                        <motion.a
                          key={label}
                          href={href}
                          aria-label={label}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          className="grid h-14 w-14 place-items-center rounded-full border border-neutral-700 bg-transparent text-neutral-700 transition hover:border-blue-500/50 hover:text-blue-600 "
                        >
                          <Icon className="h-6 w-6 " color="#fff" />
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
                className="space-y-5 px-4 py-10 sm:px-10"
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
                    whileFocus={{
                      boxShadow: "0 0 0 6px rgba(59,130,246,0.10)",
                    }}
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
                    whileFocus={{
                      boxShadow: "0 0 0 6px rgba(59,130,246,0.10)",
                    }}
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
                    whileFocus={{
                      boxShadow: "0 0 0 6px rgba(59,130,246,0.10)",
                    }}
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
                    rows={5}
                    placeholder="Write your message..."
                    className={fieldBase + " resize-y"}
                    whileFocus={{
                      boxShadow: "0 0 0 6px rgba(59,130,246,0.10)",
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.2 }}
                  className="inline-flex self-end w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600  px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 md:w-auto"
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
          </div>
          <div className="absolute bottom-0 left-0 hidden md:block -z-10 w-full overflow-hidden rounded-b-3xl">
            <Image
              src={CNtower}
              alt="Contact Illustration"
              width={370}
              height={370}
              className="mt-10 hidden md:block"
              priority
            />
          </div>
        </GlassEffect>
      </motion.div>
    </section>
  );
}
