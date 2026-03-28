# Portfolio — Selva Ganesh V

Personal portfolio website built with React 19 and TanStack Start, deployed on Vercel.

## Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routing)
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **UI components:** Radix UI + Shadcn
- **Server:** Nitro
- **Language:** TypeScript 6
- **Analytics:** Vercel Analytics
- **Font:** JetBrains Mono (variable)
- **Package manager:** pnpm

## Sections

- **About** — Intro, skills, CV download
- **Experience** — Software Engineer at Torus Innovations (Oct 2023 – present)
- **Projects** — Torus low-code platform, ColorCraft Paint Visualizer, Vezal.db
- **Contact** — Email, phone, GitHub, LinkedIn

## Getting Started

```bash
pnpm install
pnpm dev
```

## Environment Variables

Create a `.env` file at the root:

```env
VITE_GITHUB_URL=
VITE_LINKEDIN_URL=
VITE_EMAIL=
VITE_PHONE_NUMBER=
```

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `pnpm dev`    | Start dev server         |
| `pnpm build`  | Production build         |
| `pnpm serve`  | Preview production build |
| `pnpm start`  | Run built server output  |
