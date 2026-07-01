import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div className="absolute left-0 top-1 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
            <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary" />

            <div className="space-y-2">
              <span className="font-mono text-sm text-primary">{item.year}</span>
              <h3 className="display-md font-medium">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
