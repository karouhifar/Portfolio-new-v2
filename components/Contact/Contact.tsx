"use client";

import { useReducer, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";
import GlassEffect from "../ui/GlassEffect";
import CNtower from "@/public/images/cntower.png";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { fire } from "@/lib/swal";

type Social = { label: string; href: string; Icon: IconType };

type FormState = {
  toEmail: string;
  firstName: string;
  subject: string;
  message: string;
};

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

const initialState: FormState = {
  toEmail: "",
  firstName: "",
  subject: "",
  message: "",
};

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

function formReducer(
  state: FormState,
  action: { field: keyof FormState; value: string }
): FormState {
  return {
    ...state,
    [action.field]: action.value,
  };
}

export default function ContactSection({}: { email?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const [state, dispatch] = useReducer(formReducer, initialState);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        toEmail: state.toEmail,
        firstName: state.firstName,
        subject: state.subject,
        message: state.message,
      }),
    });
    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      setStatus("idle");
      fire({
        title: `Sorry, we couldn't send your message. Please try again.`,
        icon: "error",
        theme: "dark",
      });

      throw new Error(
        errorBody?.error || `Request failed with status ${res.status}`
      );
    }
    const data = await res.json();
    if (!data.ok) {
      setStatus("idle");
      fire({
        title: `Sorry, we couldn't send your message. Please try again.`,
        icon: "error",
        theme: "dark",
      });

      throw new Error(data.error || "Unknown send error");
    } else {
      fire({
        title: `Message sent successfully! I'll get back to you soon.`,
        icon: "success",
        theme: "dark",
      });
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
      }, 2000);
    }
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
    <section
      className="relative mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      id="contact"
    >
      {/* Background: deep navy + grid + soft glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
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
        className="mx-auto w-full max-w-7xl"
      >
        <GlassEffect className="space-y-10 md:space-y-0">
          <div className="h-full">
            <div className="z-50 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:divide-x md:divide-neutral-200/[0.2]">
              {/* Left column */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="max-w-xl px-1 py-2 sm:px-4 md:px-6"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let&apos;s Talk
                </h2>

                <p className="mt-4 text-lg leading-7 text-[#BEC1DD]">
                  Have some big idea or brand to develop and need help? Then
                  reach out—we&apos;d love to hear about your project and
                  provide help.
                </p>
                <div className="mt-10 space-y-8">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6 max-w-md rounded-2xl border border-purple-600/30 bg-purple-800/10 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/40">
                        <MdOutlineEmail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="flex text-lg font-semibold text-white gap-2 items-center-safe">
                          <MdOutlineEmail className="block md:hidden h-6 w-6 text-white" />
                          Email
                        </p>
                        <p className="text-gray-300">karouhifar@gmail.com</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Socials */}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Socials
                    </h3>
                    <div className="mt-4 flex gap-4 sm:gap-5">
                      {socials.map(({ Icon, label, href }) => (
                        <motion.a
                          key={label}
                          href={href}
                          aria-label={label}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          className="grid h-12 w-12 place-items-center rounded-full border border-neutral-500/50 bg-white/5 text-neutral-100 transition hover:border-blue-500/50 hover:text-blue-300 sm:h-14 sm:w-14"
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
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
                className="space-y-5 px-1 py-2 sm:px-4 md:px-6"
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
                    required
                    value={state.firstName}
                    onChange={(e) =>
                      dispatch({
                        field: "firstName",
                        value: e.target.value,
                      })
                    }
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
                    value={state.toEmail}
                    onChange={(e) =>
                      dispatch({
                        field: "toEmail",
                        value: e.target.value,
                      })
                    }
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
                    required
                    placeholder="What’s this about?"
                    className={fieldBase}
                    value={state.subject}
                    onChange={(e) =>
                      dispatch({
                        field: "subject",
                        value: e.target.value,
                      })
                    }
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
                    required
                    placeholder="Write your message..."
                    className={fieldBase + " resize-y"}
                    value={state.message}
                    onChange={(e) =>
                      dispatch({
                        field: "message",
                        value: e.target.value,
                      })
                    }
                    whileFocus={{
                      boxShadow: "0 0 0 6px rgba(59,130,246,0.10)",
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 md:w-auto"
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
          <div className="pointer-events-none absolute bottom-0 left-0 hidden w-full overflow-hidden rounded-b-3xl md:block">
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
