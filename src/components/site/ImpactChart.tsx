import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ImpactChartProps {
  className?: string;
}

export function ImpactChart({ className = "" }: ImpactChartProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { label: "Cloud", value: 85, color: "oklch(0.62 0.22 25)" },
    { label: "Security", value: 92, color: "oklch(0.65 0.20 30)" },
    { label: "Data", value: 78, color: "oklch(0.68 0.18 35)" },
    { label: "AI", value: 88, color: "oklch(0.70 0.16 40)" },
    { label: "HPC", value: 75, color: "oklch(0.72 0.14 45)" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className={`relative h-64 w-full ${className}`}>
      <div className="absolute inset-0 flex items-end justify-between gap-2 px-4">
        {data.map((item, index) => (
          <motion.div
            key={item.label}
            className="relative flex-1 rounded-t-lg"
            style={{ backgroundColor: item.color }}
            initial={{ height: 0 }}
            animate={{
              height: `${item.value}%`,
              opacity: index === activeIndex ? 1 : 0.6,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface px-3 py-1.5 text-xs font-medium shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                y: index === activeIndex ? 0 : 10,
              }}
            >
              {item.value}%
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 pt-2">
        {data.map((item, index) => (
          <span
            key={item.label}
            className={`text-xs font-medium transition-colors ${
              index === activeIndex ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
