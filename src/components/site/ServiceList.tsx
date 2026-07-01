import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { Service } from "@/lib/site-data";

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="space-y-0">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group border-b hairline py-8 last:border-0 hover:bg-surface/30 transition-colors"
        >
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display-md font-medium">{service.name}</h3>
              </div>
              <p className="mt-3 max-w-2xl text-muted-foreground">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
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
            <div className="flex items-center gap-4 text-primary opacity-0 transition-opacity group-hover:opacity-100">
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
