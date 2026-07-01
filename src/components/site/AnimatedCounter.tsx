import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({ value }: { value: string }) {
  // Parse leading number, keep suffix (e.g. "13+", "100%", "24h")
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) mv.set(target);
  }, [inView, mv, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(Number.isInteger(target) ? Math.round(v).toString() : v.toFixed(1));
    });
  }, [spring, target]);

  return (
    <span ref={ref}>
      {match ? display : ""}
      {suffix}
    </span>
  );
}
