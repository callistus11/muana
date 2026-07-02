import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/logo-mark.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src={logoMark}
        alt="Mauna Kea Consulting"
        className="h-9 w-9 transition-transform group-hover:scale-105"
      />
      {!compact && (
        <span className="font-display text-[15px] font-semibold tracking-tight">
          Mauna Kea <span className="text-muted-foreground">Consulting</span>
        </span>
      )}
    </Link>
  );
}
