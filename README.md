# Mauna Kea Consulting

Marketing website for **Mauna Kea Consulting** — a technology consulting firm serving organizations across Africa and the Middle East. The site covers services, industries, training, registration, and contact.

**Live focus areas:** Cloud, Cybersecurity, Data & Intelligence, AI, HPC, application development, and enablement programs.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [TanStack Start](https://tanstack.com/start) (file-based routing, SSR)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for page animations
- [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) components
- [Vite 8](https://vite.dev/) + [Nitro](https://nitro.build/) for build and deployment

## Requirements

- **Node.js** 20+ (or [Bun](https://bun.sh/) 1.1+)
- npm, pnpm, or bun

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs locally on the port Vite prints (typically `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Production build |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project structure

```
src/
├── routes/           # Pages (TanStack Start file-based routing)
├── components/
│   ├── site/         # Marketing components (Hero, Navbar, Footer, etc.)
│   └── ui/           # Reusable UI primitives
├── lib/
│   └── site-data.ts  # Navigation, services, industries, regions, stats
├── styles.css        # Global styles, theme tokens, utilities
├── router.tsx
└── server.ts         # SSR entry with error handling
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/industries` | Industries |
| `/training` | Training & enablement |
| `/register` | Course registration |
| `/contact` | Contact |

`sitemap.xml` is generated at `/sitemap.xml`.

## Content updates

Most site copy and structured data lives in **`src/lib/site-data.ts`**:

- `NAV_LINKS` — header/footer navigation
- `SERVICES` — practice areas
- `INDUSTRIES` — sector expertise
- `TRAINING_TRACKS` — training programs
- `REGIONS` — countries served

Page-specific layout and copy sit in the matching file under `src/routes/`.

## Styling

- Theme variables and utilities are defined in `src/styles.css`
- Font: **Montserrat** (Google Fonts, loaded in `src/routes/__root.tsx`)
- Dark theme by default; light section utilities (`section-light`, `section-cream`) for alternating bands

## Deployment

```bash
npm run build
```

The build outputs to `.output/` for Nitro-compatible hosting (e.g. Cloudflare Workers). Preview locally with:

```bash
npm run preview
```

## License

Private — © Mauna Kea Consulting. All rights reserved.
