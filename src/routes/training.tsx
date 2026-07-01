import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Layers, Laptop, Users } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { FeatureGrid } from "@/components/site/FeatureGrid";
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

const APPROACH = [
  { icon: Users, label: "Role‑based", value: "4+ Roles" },
  { icon: GraduationCap, label: "Certifications", value: "Microsoft & NVIDIA" },
  { icon: Laptop, label: "Labs", value: "100% Hands‑on" },
  { icon: Layers, label: "Delivery", value: "Flexible" },
];

function TrainingPage() {
  return (
    <>
      <section className="border-b hairline pt-32 pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Training & Enablement"
            title={<>Training & <span className="text-primary">certification</span> programs.</>}
            description="Role‑based technical training that upskills your teams on the platforms we build and operate together."
          />
        </div>
      </section>

      <section className="container-page py-20">
        <FeatureGrid features={APPROACH} />
      </section>

      <section className="border-t hairline bg-surface/30">
        <div className="container-page py-20 md:py-28">
          <SectionHeader eyebrow="Programs by role" title={<>Training tracks for every team.</>} />
          <div className="mt-12 space-y-0">
            {TRAINING_TRACKS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-b hairline py-12 last:border-0"
              >
                <div className="grid gap-8 md:grid-cols-12 items-center">
                  <div className="md:col-span-4">
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 display-xl font-medium">{t.name}</h3>
                    <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                      <span>{t.duration}</span>
                      <span>•</span>
                      <span>{t.delivery}</span>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-lg text-muted-foreground">{t.description}</p>
                    <div className="mt-6">
                      <p className="eyebrow mb-3">Key courses</p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {t.courses.map((c) => (
                          <div key={c} className="flex items-center gap-3 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Custom programs"
        title="Need something tailored?"
        description="We design custom curricula and private cohorts for enterprise teams. Tell us your goal."
      />
    </>
  );
}
