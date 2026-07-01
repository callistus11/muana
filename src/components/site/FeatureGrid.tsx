import { motion } from "framer-motion";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="text-center"
          >
            <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {feature.label}
            </p>
            <p className="mt-1 display-lg font-medium">{feature.value}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
