import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaBand({
  eyebrow = "Next step",
  title = "Ready to move from strategy to delivery?",
  description = "Book a discovery call or request a pilot proposal — we'll respond within 24 hours.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-light relative overflow-hidden border-y hairline">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)" }} />
      <div className="container-page py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid items-end gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-8">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-balance display-xl font-medium">{title}</h2>
            <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Book a Discovery Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border hairline bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Request a Proposal
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
