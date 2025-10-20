# GEMINI.md

## Project Overview

This is a web application for a landing page called "Pensamento Intrusivo: O Método".
It is built with Vite, React, TypeScript, and styled with Tailwind CSS and shadcn-ui.
The application is a single-page landing page with several sections, including a hero section, problem description, solution presentation, modules, bonuses, offer, guarantee, FAQ, and a final call to action.
The main application logic is in `src/App.tsx` which sets up the routing and providers. The main page is `src/pages/Index.tsx`.

## Building and Running

- **Development:** `npm run dev` - Starts the development server on `http://localhost:8080`.
- **Build:** `npm run build` - Builds the application for production in the `dist` folder.
- **Lint:** `npm run lint` - Lints the codebase using ESLint.
- **Preview:** `npm run preview` - Serves the production build locally for preview.

## Development Conventions

- The project uses `eslint` for linting.
- Components are located in `src/components`.
- Pages are located in `src/pages`.
- The project uses aliases for imports: `@/*` points to `src/*`.
- The project uses `react-router-dom` for routing.
- The project uses `shadcn-ui` for UI components, configured in `components.json`.
