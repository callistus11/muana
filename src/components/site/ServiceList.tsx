import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Service } from "@/lib/site-data";

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="space-y-0 border-t hairline">
      {services.map((service, index) => {
        const isLight = index % 2 === 0;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`group relative border-b hairline ${isLight ? "section-light" : "bg-background"}`}
          >
            <div className="container-page relative py-10 pl-12 md:py-12 md:pl-16">
              <div
                aria-hidden
                className={`absolute bottom-0 left-4 top-0 w-px md:left-5 ${
                  isLight ? "bg-foreground/15" : "bg-foreground/10"
                }`}
              />

              <div
                aria-hidden
                className={`absolute left-4 top-12 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 transition-transform duration-300 group-hover:scale-125 md:left-5 md:top-14 ${
                  isLight ? "bg-foreground ring-[var(--background)]" : "bg-primary ring-background"
                }`}
              />

              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-primary/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px max-w-16 flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>
                  <h3 className="mt-3 display-md font-medium">{service.name}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1.5 rounded-full border hairline bg-surface/60 px-3 py-1 text-xs text-foreground/80"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {cap}
                      </span>
                    ))}
                    {service.capabilities.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{service.capabilities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="hidden shrink-0 items-center gap-4 text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:flex">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
