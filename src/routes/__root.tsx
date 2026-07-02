import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { AmbientGlow } from "@/components/site/AmbientGlow";
import { LayoutSwitcher } from "@/components/site/LayoutSwitcher";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404 · Not found</p>
        <h1 className="mt-3 text-5xl font-semibold text-foreground">Off the trail</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to base camp
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mauna Kea Consulting — Cloud, Cybersecurity, Data, AI & HPC" },
      {
        name: "description",
        content:
          "Technology consulting for Africa and the Middle East — Cloud, Cybersecurity, Data, AI, and High Performance Computing, from pilot to scale.",
      },
      { name: "author", content: "Mauna Kea Consulting" },
      { name: "theme-color", content: "#0d0a0b" },
      { property: "og:site_name", content: "Mauna Kea Consulting" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Mauna Kea Consulting — Cloud, Cybersecurity, Data, AI & HPC" },
      { name: "twitter:title", content: "Mauna Kea Consulting — Cloud, Cybersecurity, Data, AI & HPC" },
      { name: "description", content: "MKC Sen Rebuild is a website development service that recreates or modernizes mkcsen.com." },
      { property: "og:description", content: "MKC Sen Rebuild is a website development service that recreates or modernizes mkcsen.com." },
      { name: "twitter:description", content: "MKC Sen Rebuild is a website development service that recreates or modernizes mkcsen.com." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6ac7557d-19fc-4e9a-9199-a01af396b377/id-preview-b700c9c0--4178f280-3bde-4e77-8f66-a39c709fc21b.lovable.app-1782731947564.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6ac7557d-19fc-4e9a-9199-a01af396b377/id-preview-b700c9c0--4178f280-3bde-4e77-8f66-a39c709fc21b.lovable.app-1782731947564.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mauna Kea Consulting",
          url: "/",
          description:
            "Technology consulting firm enabling organizations across Africa and the Middle East through Cloud, Cybersecurity, Data, AI, and HPC.",
          areaServed: ["Africa", "Middle East"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <AmbientGlow />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <LayoutSwitcher />
      </div>
    </QueryClientProvider>
  );
}
