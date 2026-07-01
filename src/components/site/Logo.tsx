import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40 transition-colors group-hover:bg-primary/25">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor" aria-hidden>
          <path d="M12 3 L22 21 H2 Z M12 11 L17 20 H7 Z" fillRule="evenodd" />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-[15px] font-semibold tracking-tight">
          Mauna Kea <span className="text-muted-foreground">Consulting</span>
        </span>
      )}
    </Link>
  );
}
