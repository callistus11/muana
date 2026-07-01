import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface HorizontalScrollProps {
  items: ScrollItem[];
}

export function HorizontalScroll({ items }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    axis: "x",
  });
  const x = useTransform(scrollXProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="overflow-x-auto pb-6">
      <motion.div style={{ x }} className="flex gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-shrink-0 w-80 rounded-2xl border hairline bg-surface/40 p-8"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="display-md font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
