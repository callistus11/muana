import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Sparkles, Target } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { StatsRow } from "@/components/site/StatsRow";
import { CtaBand } from "@/components/site/CtaBand";
import { Marquee } from "@/components/site/Marquee";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { ImpactChart } from "@/components/site/ImpactChart";
import { ServiceList } from "@/components/site/ServiceList";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { SERVICES, INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mauna Kea Consulting — Build Faster. Operate Securely. Scale with Confidence." },
      {
        name: "description",
        content:
          "Cloud, Cybersecurity, Data, AI, and HPC consulting for organizations across Africa and the Middle East.",
      },
      { property: "og:title", content: "Mauna Kea Consulting" },
      { property: "og:description", content: "From rapid pilots to enterprise scale." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const PILLARS = [
  {
    icon: Target,
    title: "Strategic alignment",
    body: "Every initiative serves a clear business outcome with measurable ROI.",
  },
  {
    icon: Compass,
    title: "Pragmatic execution",
    body: "Start small, prove value, scale with confidence through iterative delivery.",
  },
  {
    icon: Sparkles,
    title: "Knowledge transfer",
    body: "Build internal capability, not dependency — your teams own what we ship.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />

      {/* About */}
      <section className="container-page py-24 md:py-32">
        <ScrollReveal>
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow mb-4">About</p>
              <h2 className="text-balance display-lg font-medium">
                A consulting firm built for high‑growth markets.
              </h2>
            </div>
            <div className="space-y-5 md:col-span-7 md:pt-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Mauna Kea Consulting is a technology consulting firm focused on enabling
                organizations across Africa and the Middle East to compete, grow, and innovate
                through Cloud, Cybersecurity, Data, AI, and High Performance Computing.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Digital transformation in high‑growth markets requires more than technology — it
                requires execution. We combine deep technical expertise, regional understanding,
                and a pilot‑to‑scale delivery model to help organizations modernize, secure, and
                future‑proof their operations.
              </p>
              <div className="pt-3">
                <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read our story <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16">
          <ScrollReveal delay={0.2}>
            <StatsRow />
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <ScrollReveal delay={0.3}>
            <div className="rounded-xl border hairline bg-surface/60 p-8">
              <div className="mb-6">
                <p className="eyebrow mb-2">Impact by Practice Area</p>
                <h3 className="display-md font-medium">Measurable outcomes across all services</h3>
              </div>
              <ImpactChart />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why */}
      <section className="section-light border-t hairline">

        <div className="container-page py-24 md:py-32">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why Mauna Kea"
              title={<>Execution over slideware.</>}
              description="Three principles guide every engagement — from a one‑week diagnostic to a multi‑year transformation."
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="rounded-xl border hairline bg-surface/70 p-7">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    0{i + 1}
                  </div>
                  <div className="mt-4 grid h-11 w-11 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-24 md:py-32">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Our core services"
              title={<>End‑to‑end technology, built for measurable impact.</>}
              description="Seven practice areas designed to work independently — or as a single, coordinated transformation program."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border hairline px-4 py-2 text-sm transition-colors hover:bg-secondary"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
        <div className="mt-14">
          <ServiceList services={SERVICES.slice(0, 6)} />
        </div>
      </section>

      {/* Industries strip */}
      <section className="section-cream border-t hairline">
        <div className="container-page py-24 md:py-32">
          <ScrollReveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader
                eyebrow="Industries"
                title={<>Deep expertise across critical sectors.</>}
                description="We partner with organizations in regulated and high‑complexity industries — where execution is everything."
              />
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 rounded-md border hairline px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                Explore industries <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="mt-14">
            <ScrollReveal delay={0.2}>
              <div className="grid gap-8 md:grid-cols-3">
                {INDUSTRIES.slice(0, 6).map((ind, i) => (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group"
                  >
                    <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <ind.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="display-md font-medium">{ind.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{ind.description}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal delay={0.3}>
        <CtaBand />
      </ScrollReveal>
    </>
  );
}
