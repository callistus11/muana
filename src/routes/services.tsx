import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mauna Kea Consulting" },
      {
        name: "description",
        content:
          "Enterprise advisory, build, and managed services across Cloud, Cybersecurity, Data, AI, HPC, application development, and training.",
      },
      { property: "og:title", content: "Services — Mauna Kea Consulting" },
      { property: "og:description", content: "Seven practice areas, one delivery model: pilot to scale." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b hairline pt-32 pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Services"
            title={<>Our <span className="text-primary">premium</span> services.</>}
            description="Enterprise‑grade advisory, build, and managed services that transform your technology landscape while keeping operations running."
          />
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="space-y-0">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-b hairline py-16 last:border-0"
              >
                <div className="grid gap-12 md:grid-cols-12 items-center">
                  <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="grid h-32 w-32 place-items-center rounded-3xl bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <Icon className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="display-xl font-medium">{service.name}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground">{service.description}</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-foreground/90">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Start with a 2‑week pilot."
        description="Tell us your priority area and we'll shape a focused engagement with clear outcomes."
      />
    </>
  );
}
