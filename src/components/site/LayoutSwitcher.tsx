import { useState, createContext, useContext } from "react";
import { LayoutGrid, LayoutTemplate, Newspaper } from "lucide-react";

type LayoutMode = "grid" | "broken" | "editorial";

const LayoutContext = createContext<LayoutMode>("grid");

export function useLayoutMode() {
  return useContext(LayoutContext);
}

export function LayoutSwitcher() {
  const [layout, setLayout] = useState<LayoutMode>("grid");

  const layouts = [
    { id: "grid" as const, label: "Grid", icon: LayoutGrid },
    { id: "broken" as const, label: "Broken", icon: LayoutTemplate },
    { id: "editorial" as const, label: "Editorial", icon: Newspaper },
  ];

  return (
    <LayoutContext.Provider value={layout}>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border hairline bg-surface/80 p-1.5 backdrop-blur-xl">
        {layouts.map((l) => {
          const Icon = l.icon;
          return (
            <button
              key={l.id}
              onClick={() => setLayout(l.id)}
              className={`grid h-9 w-9 place-items-center rounded-full transition-all ${
                layout === l.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
              title={`${l.label} layout`}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>
    </LayoutContext.Provider>
  );
}
