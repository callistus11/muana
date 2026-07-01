import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { StatsRow } from "@/components/site/StatsRow";
import { Timeline } from "@/components/site/Timeline";
import { REGIONS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mauna Kea Consulting" },
      {
        name: "description",
        content:
          "Mauna Kea Consulting is a technology consulting firm bridging global capabilities and regional market needs across Africa and the Middle East.",
      },
      { property: "og:title", content: "About — Mauna Kea Consulting" },
      { property: "og:description", content: "Global capabilities, regional focus, deliberate execution." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const APPROACH = [
  {
    year: "01",
    title: "Strategic Alignment",
    description: "Every technology decision serves a clear business purpose with measurable ROI and strategic impact.",
  },
  {
    year: "02",
    title: "Pragmatic Execution",
    description: "Start small, prove value, then scale with confidence through iterative delivery and continuous improvement.",
  },
  {
    year: "03",
    title: "Knowledge Transfer",
    description: "Build internal capability, not dependency, through comprehensive enablement and skill development.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b hairline pt-32 pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="About"
            title={<>Technology transformation should be <span className="text-primary">deliberate</span>, measurable, and aligned with business outcomes.</>}
            description="Mauna Kea Consulting is a technology consulting and managed services firm focused on enabling organizations across Africa and the Middle East to compete, grow, and innovate."
          />
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="display-lg font-medium">
              Global capabilities, regional focus.
            </h2>
          </div>
          <div className="space-y-5 md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded with a vision to bridge the gap between global technology capabilities
              and regional market needs, Mauna Kea Consulting brings together deep technical
              expertise with local market understanding.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We work with C‑suite, IT leadership, and architecture teams to turn strategic
              technology initiatives into operational reality — ensuring every solution delivers
              measurable business value.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-surface/30">
        <div className="container-page py-20 md:py-28">
          <SectionHeader eyebrow="Our approach" title="Three principles that shape every engagement." />
          <div className="mt-14">
            <Timeline items={APPROACH} />
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="Global impact, regional focus" title="Where we work." />
        <div className="mt-12 space-y-8">
          {[
            { label: "Africa", note: "Emerging markets with explosive growth potential.", list: REGIONS.africa },
            { label: "Middle East", note: "Digital transformation hubs with ambitious vision.", list: REGIONS.middleEast },
          ].map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border hairline bg-surface/40 p-10"
            >
              <div className="relative z-10">
                <p className="eyebrow">{r.label}</p>
                <h3 className="mt-4 display-xl font-medium">{r.label}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{r.note}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {r.list.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border hairline bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <StatsRow />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
