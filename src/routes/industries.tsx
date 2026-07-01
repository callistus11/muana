import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Mauna Kea Consulting" },
      {
        name: "description",
        content:
          "Industry‑specific technology solutions for banking, public sector, energy, healthcare, mining, telecom, manufacturing, retail, education, and legal.",
      },
      { property: "og:title", content: "Industries — Mauna Kea Consulting" },
      { property: "og:description", content: "Deep expertise across critical industries." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <section className="border-b hairline pt-32 pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Industries"
            title={<>Industries we <span className="text-primary">transform</span>.</>}
            description="We partner with organizations across regulated, complex, and high‑growth industries — bringing deep expertise tailored to each sector's reality."
          />
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border hairline bg-surface/40 p-8 transition-all hover:border-primary/40 hover:bg-surface/60"
            >
              <div className="relative z-10">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                  <ind.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="display-md font-medium">{ind.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{ind.description}</p>
                <div className="mt-6 space-y-2">
                  {ind.priorities.slice(0, 2).map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs text-foreground/70">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Sector‑specific"
        title="Don't see your industry?"
        description="We work across regulated and complex sectors — tell us your context and we'll bring the right team."
      />
    </>
  );
}
