import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Layers, Laptop, Users } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Timeline } from "@/components/site/Timeline";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { TRAINING_TRACKS } from "@/lib/site-data";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training & Certification — Mauna Kea Consulting" },
      {
        name: "description",
        content:
          "Role‑based technical training and certification programs on cloud, cybersecurity, data, AI, and HPC.",
      },
      { property: "og:title", content: "Training — Mauna Kea Consulting" },
      { property: "og:description", content: "Hands‑on, role‑based training for technical teams and leaders." },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const TRAINING_STATS = [
  { value: "4", label: "Role-based tracks" },
  { value: "100%", label: "Hands-on labs" },
  { value: "3–5", label: "Days per course" },
  { value: "Flexible", label: "Delivery formats" },
] as const;

const PILLARS = [
  {
    icon: Users,
    title: "Role-based curricula",
    body: "Programs tailored to developers, architects, operators, and executives — not one-size-fits-all.",
  },
  {
    icon: Laptop,
    title: "Hands-on by default",
    body: "Every session includes practical labs on the platforms and tools your teams will use in production.",
  },
  {
    icon: GraduationCap,
    title: "Certification-aligned",
    body: "Courses mapped to industry credentials from Microsoft, NVIDIA, and leading cloud providers.",
  },
  {
    icon: Layers,
    title: "Flexible delivery",
    body: "Virtual, onsite, hybrid, or workshop formats — scheduled around your team's availability.",
  },
] as const;

const DELIVERY_MODEL = [
  {
    year: "01",
    title: "Assess & align",
    description: "We map roles, skill gaps, and business outcomes to select the right track and format.",
  },
  {
    year: "02",
    title: "Deliver & practice",
    description: "Instructor-led sessions with guided labs, real scenarios, and peer collaboration.",
  },
  {
    year: "03",
    title: "Enable & transfer",
    description: "Your teams leave with documented playbooks and the confidence to operate independently.",
  },
] as const;

function TrainingPage() {
  return (
    <>
      <section className="border-b hairline pt-32 pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Training & Enablement"
            title={
              <>
                Upskill the teams who{" "}
                <span className="text-primary">run what we build.</span>
              </>
            }
            description="Role-based technical training and certification programs on cloud, cybersecurity, data, AI, and HPC — designed for the platforms we deliver together."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border hairline bg-hairline md:grid-cols-4">
          {TRAINING_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden bg-surface p-6 md:p-8"
            >
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative display-xl font-medium">{stat.value}</p>
              <p className="relative mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-light border-y hairline">
        <div className="container-page py-20 md:py-28">
          <ScrollReveal>
            <div className="grid items-start gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="eyebrow mb-4">Our approach</p>
                <h2 className="display-lg font-medium">
                  Knowledge transfer, not dependency.
                </h2>
              </div>
              <div className="space-y-5 md:col-span-7 md:pt-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Training is embedded in every engagement we deliver. We design programs that
                  build lasting capability — so your teams can operate, extend, and evolve the
                  solutions we implement together.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  From cloud fundamentals to executive AI strategy, each track is structured for
                  measurable outcomes and aligned with the certifications that matter in your
                  industry.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border hairline bg-surface/70 p-7">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-4 grid h-11 w-11 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow="Programs by role"
          title="Training tracks for every team."
          description="Four role-based tracks covering the full spectrum — from hands-on engineering to boardroom strategy."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {TRAINING_TRACKS.map((track, i) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border hairline bg-surface/40 p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Duration
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{track.duration}</p>
                  </div>
                </div>

                <h3 className="mt-4 display-md font-medium">{track.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {track.description}
                </p>

                <div className="mt-6 border-t hairline pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Delivery
                  </p>
                  <p className="mt-1 text-sm font-medium">{track.delivery}</p>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Key courses
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {track.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border hairline bg-background/60 px-3.5 py-1.5 text-sm font-medium text-foreground/90"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/register"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Register for a course
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y hairline bg-surface/30">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <SectionHeader
                eyebrow="How it works"
                title="From assessment to enablement."
              />
            </div>
            <div className="md:col-span-7">
              <p className="text-muted-foreground md:text-lg">
                A structured delivery model that ensures every program translates into lasting
                organizational capability.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <Timeline items={[...DELIVERY_MODEL]} />
          </div>
        </div>
      </section>

      <section className="section-light border-b hairline">
        <div className="container-page py-20 md:py-24">
          <ScrollReveal>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="eyebrow mb-4">Course registration</p>
                <h2 className="display-lg font-medium">Ready to enroll your team?</h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Browse open courses, check schedules, and register directly — or reach out for
                  private cohorts and custom curricula.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  View course catalog
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border hairline bg-transparent px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Custom program enquiry
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Enterprise training"
        title="Need a bespoke curriculum?"
        description="We design private cohorts and custom programs tailored to your stack, roles, and delivery timeline."
      />
    </>
  );
}
