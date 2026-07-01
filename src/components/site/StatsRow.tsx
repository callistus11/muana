import { motion } from "framer-motion";
import { STATS } from "@/lib/site-data";
import { AnimatedCounter } from "./AnimatedCounter";

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border hairline bg-hairline md:grid-cols-4">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="group relative overflow-hidden bg-surface p-6 md:p-8"
        >
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <p className="relative display-xl font-medium">
            <AnimatedCounter value={s.value} />
          </p>
          <p className="relative mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
