import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@bytevora.com",
    href: "mailto:hello@bytevora.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
  },
];

const projectTypes = [
  "Web Development",
  "Mobile App",
  "SaaS Platform",
  "AI Solution",
  "SEO & Optimization",
  "Other",
];

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-surface-200/40 outline-none transition-all duration-200 focus:border-primary-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary-500/30";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
    // Reset the success message after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Let&rsquo;s Work{" "}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-surface-200/70 sm:text-lg">
            Tell us about your project and we&rsquo;ll get back to you within 24
            hours.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          className="mt-16 grid gap-10 lg:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* ── Form (left — 3 cols) ────────────────────── */}
          <motion.div
            className="glass rounded-2xl p-6 sm:p-8 lg:col-span-3"
            variants={fadeUp}
          >
            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-300">
                <CheckCircle className="h-5 w-5 shrink-0" />
                Thank you! Your message has been sent. We&rsquo;ll be in touch
                soon.
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-5 sm:grid-cols-2"
              noValidate
            >
              {/* Name */}
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-surface-200/80">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={inputBase}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-surface-200/80">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={inputBase}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-surface-200/80">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className={inputBase}
                  {...register("phone")}
                />
              </div>

              {/* Company */}
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-surface-200/80">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className={inputBase}
                  {...register("company")}
                />
              </div>

              {/* Project Type */}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-surface-200/80">
                  Project Type
                </label>
                <select className={inputBase} {...register("projectType")}>
                  <option value="" className="bg-surface-900">
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-surface-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-surface-200/80">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={`${inputBase} resize-none`}
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* ── Contact info (right — 2 cols) ───────────── */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-2"
            variants={fadeUp}
          >
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              const linkProps = href
                ? {
                    href,
                    target: href.startsWith("http") ? "_blank" : undefined,
                    rel: href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};

              return (
                <Wrapper
                  key={label}
                  {...linkProps}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors duration-300 hover:bg-white/[0.08]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/15">
                    <Icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-surface-200/50">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Response time notice */}
            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              <Clock className="h-5 w-5 shrink-0 text-accent-400" />
              <p className="text-sm leading-relaxed text-surface-200/70">
                We typically respond within{" "}
                <span className="font-semibold text-white">24 hours</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
