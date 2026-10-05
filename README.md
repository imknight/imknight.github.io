![Astro Nano](_astro_nano.png)

Astro Nano is a static, minimalist, lightweight, lightning fast portfolio and blog theme.

Built with Astro, Tailwind and Typescript, an no frameworks.

It was designed as an even more minimal theme than my popular theme [Astro Sphere](https://github.com/markhorn-dev/astro-sphere)

## 🚀 Deploy your own

[![Deploy with Vercel](_deploy_vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-nano)  [![Deploy with Netlify](_deploy_netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-nano)

## 📋 Features

- ✅ 100/100 Lighthouse performance
- ✅ Responsive
- ✅ Accessible
- ✅ SEO-friendly
- ✅ Typesafe
- ✅ Minimal style
- ✅ Light/Dark Theme
- ✅ Animated UI
- ✅ Tailwind styling
- ✅ Auto generated sitemap
- ✅ Auto generated RSS Feed
- ✅ Markdown support
- ✅ MDX Support (components in your markdown)

## 💯 Lighthouse score
![Astro Nano Lighthouse Score](_lighthouse.png)

## 🕊️ Lightweight
No frameworks or added bulk

## ⚡︎ Fast
Rendered in ~40ms on localhost

## 📄 Configuration

The blog posts on the demo serve as the documentation and configuration.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts local dev server on local network         |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Preview build on local network                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## Analytics

Umami tracking for imknight.dev uses [stat.visualdevstudio.com](https://stat.visualdevstudio.com) and website ID `d0edb842-6940-4488-976c-618337be049e`. Open that website in Umami to view traffic and events.

The shared head loads the tracker once. Umami records page views and referral information. After Astro navigation, the current history entry is refreshed with its existing URL and state so Umami also detects back/forward navigation; unchanged URLs do not produce additional page views. Tracking is limited to `imknight.dev` and `www.imknight.dev`, excluding local previews.

| Event | Action | Properties |
| --- | --- | --- |
| `product-click` | Open a product card from the homepage or Products page | `product`, `url` |
| `contact-click` | Open an X, Bluesky, or VisualDev Studio link under Let's Connect | `channel`, `url` |

Click events measure link openings, not completed contacts or conversions. Blocked tracking and unavailable data are not zero traffic. Dashboard receipt must be checked after deployment; local checks intercept requests to avoid adding test traffic.

## 🏛️ License

MIT
