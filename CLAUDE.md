# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server at localhost:4321
yarn build        # Type-check (astro check) then build to ./dist/
yarn preview      # Preview production build locally
yarn lint         # Run ESLint
yarn lint:fix     # Auto-fix ESLint issues
```

## Architecture

This is a personal portfolio/blog site built on **Astro Nano** — a static site using Astro, Tailwind CSS, and TypeScript with no JS frameworks.

**Content Collections** (`src/content/`):
- `logs/` — Blog posts (MDX/MD) with frontmatter: `title`, `description`, `date`, `draft?`
- `products/` — Product entries with frontmatter: `title`, `description`, `link?`, `date`

**Site Configuration** (`src/consts.ts`): Central place for site metadata, social links, and how many items appear on the homepage for each section.

**Key files:**
- `src/consts.ts` — Site name, email, social links, homepage item counts
- `src/content/config.ts` — Zod schemas for content collections
- `src/types.ts` — TypeScript types (`Site`, `Metadata`, `Socials`)
- `src/pages/` — File-based routing; `logs/` and `products/` map to collections
- `astro.config.mjs` — Astro config (integrations: MDX, sitemap, Tailwind, RSS)
- `tailwind.config.mjs` — Tailwind config including typography plugin

To add content: create `.md` or `.mdx` files in `src/content/logs/` or `src/content/products/` with the required frontmatter fields.
