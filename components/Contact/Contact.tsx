"use client";

import { useReducer, useState } from "react";
import { motion, Variants } from "motion/react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { IconType } from "react-icons";
import GlassEffect from "../ui/GlassEffect";
import CNtower from "@/public/images/cntower.png";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { fire } from "@/lib/swal";
import { siteConfig } from "@/lib/site";

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
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: siteConfig.socials.github, Icon: FaGithub },
  { label: "Medium", href: siteConfig.socials.medium, Icon: FaMedium },
];

const initialState: FormState = {
  toEmail: "",
  firstName: "",
  subject: "",
  message: "",
};

const EMAIL_API = process.env.NEXT_PUBLIC_API_URL + "/api/sendEmail/clE2Rot6CU";

const fieldBase =
  "w-full px-4 py-3 bg-indigo-900/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors";
const labelBase = "block mb-2 text-sm font-medium text-white";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// Declared at module scope: defining this inside ContactSection created a new
// component type on every state change, remounting the shapes and restarting
// their (infinite) animation mid-flight.
const AnimatedShape: React.FC<{ shape: Shape }> = ({ shape }) => {
  const { color, size, x, y, initialScale, initialRotate, duration, delay } =
    shape;

  return (
    <motion.div
      aria-hidden
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        filter: "blur(40px)",
        zIndex: -1,
        backgroundColor: color,
      }}
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

function formReducer(
  state: FormState,
  action: { field: keyof FormState; value: string },
): FormState {
  return {
    ...state,
    [action.field]: action.value,
  };
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const [state, dispatch] = useReducer(formReducer, initialState);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const failed = () => {
      setStatus("idle");
      fire({
        title: `Sorry, we couldn't send your message. Please try again.`,
        icon: "error",
        theme: "dark",
      });
    };

    try {
      const res = await fetch(EMAIL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toEmail: state.toEmail,
          firstName: state.firstName,
          subject: state.subject,
          message: `${"DreamsDigital Inc."}\n\nMessage Details:\n${state.message}`,
        }),
      });

      const data = res.ok ? await res.json().catch(() => null) : null;

      if (!data?.ok) {
        failed();
        return;
      }

      fire({
        title: `Message sent successfully! I'll get back to you soon.`,
        icon: "success",
        theme: "dark",
      });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      // Previously this threw out of the submit handler, surfacing an
      // unhandled rejection in the console after the alert had already shown.
      failed();
    }
  }

  return (
    <section
      className="relative mx-auto w-full px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Background: deep navy + soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
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
            x: 88,
            y: 45,
            initialScale: 0.7,
            initialRotate: 120,
            duration: 15,
            delay: 0,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-7xl"
      >
        <GlassEffect className="space-y-10 p-4 sm:p-8 md:space-y-0">
          <div className="h-full">
            <div className="z-50 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:divide-x md:divide-neutral-200/[0.2]">
              {/* Left column */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="my-[1vh] max-w-xl px-1 py-2 text-[#BEC1DD] sm:px-4 md:px-6"
              >
                <h2
                  id="contact-heading"
                  className="text-2xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Let&apos;s Talk
                </h2>

                <p className="mt-4 text-base leading-7 text-[#BEC1DD] sm:text-lg">
                  Have some big idea or brand to develop and need help? Then
                  reach out—we&apos;d love to hear about your project and
                  provide help.
                </p>
                <div className="mt-10 space-y-8">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-6 max-w-md rounded-2xl border border-purple-600/30 bg-purple-800/10 p-4 backdrop-blur-sm sm:p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-purple-600/40 md:flex">
                        <MdOutlineEmail
                          className="h-6 w-6 text-white"
                          aria-hidden
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="flex items-center gap-2 text-lg font-semibold text-white">
                          <MdOutlineEmail
                            className="block h-6 w-6 text-white md:hidden"
                            aria-hidden
                          />
                          Email
                        </p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="break-all text-gray-300 underline-offset-4 hover:underline"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Socials */}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Socials
                    </h3>
                    <ul className="mt-4 flex gap-4 sm:gap-5">
                      {socials.map(({ Icon, label, href }) => (
                        <li key={label}>
                          <motion.a
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="grid h-12 w-12 place-items-center rounded-full border border-neutral-500/50 bg-white/5 text-neutral-100 transition hover:border-blue-500/50 hover:text-blue-300 sm:h-14 sm:w-14"
                          >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Right column (Form) */}
              <motion.form
                onSubmit={onSubmit}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-5 px-1 py-2 sm:px-4 md:px-6"
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
                    autoComplete="name"
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
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={state.toEmail}
                    onChange={(e) =>
                      dispatch({
                        field: "toEmail",
                        value: e.target.value,
                      })
                    }
                    className={fieldBase}
                    required
                    whileFocus={{
                      boxShadow: "0 0 0 6px rgba(59,130,246,0.10)",
                    }}
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
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:opacity-70 md:w-auto"
                  disabled={status === "submitting" || status === "success"}
                >
                  {status === "success"
                    ? "Message sent ✓"
                    : status === "submitting"
                      ? "Sending…"
                      : "Send message"}
                </motion.button>

                {/* Scoped live region — announcing the whole form was noisy. */}
                <p role="status" aria-live="polite" className="sr-only">
                  {status === "submitting"
                    ? "Sending your message"
                    : status === "success"
                      ? "Message sent"
                      : ""}
                </p>
              </motion.form>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 hidden w-full overflow-hidden rounded-b-3xl md:block"
          >
            <Image
              src={CNtower}
              alt=""
              width={370}
              height={253}
              sizes="370px"
              className="mt-10 hidden h-auto w-[370px] md:block"
            />
          </div>
        </GlassEffect>
      </motion.div>
    </section>
  );
}
