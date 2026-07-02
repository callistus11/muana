import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroMountain from "@/assets/hero-mountain.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import heroDC from "@/assets/hero-datacenter.jpg";

const SLIDES = [
  {
    eyebrow: "Cloud · Security · AI",
    title: ["Build Faster.", "Operate Securely.", "Scale with Confidence."],
    body: "We help organizations across Africa and the Middle East unlock value through Cloud, Cybersecurity, Data, AI, and High Performance Computing — from rapid pilots to enterprise scale.",
    image: heroMountain,
    accent: "STATUS: ACTIVE",
  },
  {
    eyebrow: "Enablement",
    title: ["Train the teams", "who run what", "we build."],
    body: "Role‑based, hands‑on training that turns knowledge transfer into measurable capability — for developers, architects, operators, and executives.",
    image: heroTeam,
    accent: "SECURITY: ENABLED",
  },
  {
    eyebrow: "HPC & AI",
    title: ["Compute at the", "frontier of", "your research."],
    body: "From GPU clusters to MLOps pipelines, we operationalize the infrastructure that powers modern AI and high‑performance workloads.",
    image: heroDC,
    accent: "PERFORMANCE: OPTIMAL",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[i];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-16">
      {/* Background slideshow with parallax */}
      <motion.div style={{ y: bgY, x: sx, scale: 1.1 }} className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <motion.img
              style={{ y: sy }}
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-page flex min-h-[calc(100svh-4rem)] flex-col justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="eyebrow inline-flex items-center gap-2">
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-primary" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-primary" />
              </span>
              {slide.eyebrow}
            </p>
            <h1 className="mt-4 text-balance text-6xl font-normal leading-tight md:text-7xl">
              {slide.title.map((line, idx) => (
                <span key={idx} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {idx === slide.title.length - 1 ? (
                      <span className="text-gradient font-medium">{line}</span>
                    ) : (
                      <span className="font-light">{line}</span>
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground"
            >
              {slide.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Book a Discovery Call</span>
                <ArrowUpRight className="relative h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border hairline bg-background/40 px-4 py-2 text-xs font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
              >
                Request a Pilot Proposal
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
