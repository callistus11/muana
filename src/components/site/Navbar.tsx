import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, type NavLink } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b hairline bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => setHoveredDropdown(l.label)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              {"children" in l && l.children ? (
                <>
                  <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {hoveredDropdown === l.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-0 top-full mt-1 w-48 rounded-md border hairline bg-background shadow-lg"
                    >
                      <div className="py-1">
                        {l.children.map((child: { to: string; label: string }) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </>
              ) : (
                "to" in l && l.to && (
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "text-foreground bg-secondary" }}
                    inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                    className="rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Book a Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md border hairline md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t hairline bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <div key={l.label}>
                  {"children" in l && l.children ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === l.label ? null : l.label)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base text-muted-foreground"
                      >
                        {l.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileDropdown === l.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileDropdown === l.label && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {l.children.map((child: { to: string; label: string }) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              onClick={() => setOpen(false)}
                              activeOptions={{ exact: child.to === "/" }}
                              activeProps={{ className: "bg-secondary text-foreground" }}
                              inactiveProps={{ className: "text-muted-foreground" }}
                              className="rounded-md px-3 py-2 text-sm"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    "to" in l && l.to && (
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        activeOptions={{ exact: l.to === "/" }}
                        activeProps={{ className: "bg-secondary text-foreground" }}
                        inactiveProps={{ className: "text-muted-foreground" }}
                        className="rounded-md px-3 py-3 text-base"
                      >
                        {l.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Book a Call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
