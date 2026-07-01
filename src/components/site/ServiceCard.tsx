import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const ref = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const gx = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border hairline bg-surface/60 p-7 transition-colors hover:border-primary/40 hover:bg-surface [transform-style:preserve-3d]"
    >
      {/* mouse-follow glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [gx, gy] as never,
            ([x, y]: string[]) =>
              `radial-gradient(420px circle at ${x} ${y}, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)`
          ),
        }}
      />
      <div className="relative flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          0{index + 1}
        </span>
      </div>
      <h3 className="relative mt-6 display-md font-medium">{service.name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <ul className="relative mt-5 space-y-2">
        {service.capabilities.slice(0, 4).map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{c}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-7 pt-5 border-t hairline">
        <Link
          to="/contact"
          className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          {service.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
