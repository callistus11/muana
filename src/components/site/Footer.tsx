import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { NAV_LINKS, SERVICES } from "@/lib/site-data";
import { Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t hairline bg-surface/40">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Technology consulting for Africa and the Middle East — Cloud, Cybersecurity,
              Data, AI, and High Performance Computing, from pilot to scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-primary" /> Africa · Middle East</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> hello@mkcsen.com</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Services</p>
            <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.id} className="text-muted-foreground">{s.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Mauna Kea Consulting. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">STATUS: ACTIVE · SECURITY: ENABLED</p>
        </div>
      </div>
    </footer>
  );
}
