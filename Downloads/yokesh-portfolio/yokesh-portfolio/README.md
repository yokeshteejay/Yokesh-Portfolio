# Yokesh Katraj - Animated MERN Portfolio

React + Vite + Tailwind CSS (frontend only, no backend needed).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # creates /dist
npm run preview    # test the production build
```

## Deploy (Hostinger / any Apache host)

1. Run `npm run build`
2. Upload **everything inside `dist/`** (including the hidden `.htaccess`) to `public_html`
3. Done - HTTPS redirect, SPA routing, gzip, caching and security headers are already set in `.htaccess`

A ready-built `dist/` folder is already included in this zip.

## Where to edit things

| What | File |
| --- | --- |
| All text, links, projects, skills, cities | `src/data/siteContent.js` |
| Photos | `src/assets/images/profile`, `moments` |
| Project screenshots | `src/assets/images/projects` |
| Colours and animations | `tailwind.config.js` |
| Reusable CSS classes (`glass-card`, `button-primary`...) | `src/index.css` |
| Resume PDF | `public/Yokesh_Katraj_Resume.pdf` |
| Favicon, OG image, manifest | `public/` |

## Folder structure

```
src/
  components/
    common/      RevealOnScroll, SectionHeading, AnimatedCounter, TiltCard
    effects/     ParticleNetworkCanvas, AuroraBackground, CursorGlow, TypingRoleText, TechMarquee, NeuralNetworkVisual
    floating/    WhatsAppButton, BackToTopButton
    layout/      Navbar, Footer, PageLoader, ScrollProgressBar
    projects/    BrowserFrame, FeaturedProjectRow, ProjectGridCard
    sections/    Hero, About, Experience, Projects, Skills, AiFocus, MomentsGallery, ServiceArea, Contact
  data/          siteContent.js
  hooks/         useScrollSpy, useTypingEffect
  utils/         iconRegistry.jsx
```

## Before going live

- Replace `https://yokeshkatraj.com` in `index.html`, `public/robots.txt` and `public/sitemap.xml` with your real domain.
- The MEPCO Global card uses a styled placeholder because no screenshot was provided. Add a screenshot to `src/assets/images/projects/`, import it in `siteContent.js` and set it as `image`.
