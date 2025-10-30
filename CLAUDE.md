# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for "Pensamento Intrusivo: O Método" - a single-page React application built with Vite, TypeScript, Tailwind CSS, and shadcn-ui. The landing page includes sections for hero, problem description, solution presentation, modules, bonuses, offer, guarantee, FAQ, and call-to-action.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:8080
- `npm run build` - Production build (outputs to `dist/`)
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

### Installation
```bash
npm install
```

## Architecture

### Application Structure
- **Entry Point**: `src/main.tsx` → `src/App.tsx`
- **Main Page**: `src/pages/Index.tsx` (contains all landing page sections)
- **Routing**: React Router DOM with catch-all 404 route (`src/pages/NotFound.tsx`)
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: shadcn-ui components in `src/components/ui/`
- **Custom Components**: Landing page-specific components in `src/components/`

### Key Technologies
- **Build Tool**: Vite with SWC plugin for fast refresh
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Library**: shadcn-ui (Radix UI primitives)
- **Forms**: React Hook Form with Zod validation
- **Icons**: lucide-react

### Import Aliases
The project uses `@/*` to reference `src/*`:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

Configured in:
- `vite.config.ts` - Runtime resolution
- `tsconfig.json` - TypeScript path mapping
- `components.json` - shadcn-ui configuration

### Component Organization
```
src/
├── components/
│   ├── ui/              # shadcn-ui components (auto-generated, editable)
│   ├── BonusCard.tsx    # Landing page components
│   ├── ModuleCard.tsx
│   ├── PainPoint.tsx
│   ├── FAQItem.tsx
│   └── CTAButton.tsx
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/
│   └── utils.ts         # Utility functions (cn, etc.)
└── App.tsx              # App providers and routing
```

## shadcn-ui Integration

### Adding Components
Use the shadcn CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

Configuration is in `components.json`:
- Style: default
- Base color: slate
- CSS variables: enabled
- Components path: `src/components/ui`

### Customizing Components
shadcn-ui components are fully editable source files in `src/components/ui/`. Modify them directly as needed.

## Styling System

### Tailwind Configuration
- Custom theme extends default Tailwind
- CSS variables defined in `src/index.css` for dynamic theming
- Dark mode: class-based strategy
- Custom animations: accordion-down, accordion-up
- Typography plugin: `@tailwindcss/typography`

### Theme Tokens
Color system uses HSL CSS variables:
- Primary, secondary, destructive, muted, accent
- Background, foreground, border
- Card, popover, sidebar variants

Access via Tailwind classes: `bg-primary`, `text-foreground`, etc.

## TypeScript Configuration

### Relaxed Type Checking
The project has relaxed TypeScript settings in `tsconfig.json`:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

**Note**: When adding new code, prefer explicit typing but respect the existing relaxed configuration.

### ESLint Rules
- React Hooks rules enforced
- Unused variables warning disabled (`@typescript-eslint/no-unused-vars: off`)
- React Refresh warnings for component exports

## Server Configuration

Vite dev server configured to:
- Listen on all interfaces (`::`) for network access
- Run on port 8080
- Use SWC for fast React refresh

## Deployment

Build artifacts go to `dist/` directory. Deploy to any static hosting:
- Cloudflare Pages
- Vercel
- Netlify

Build command: `npm run build`
