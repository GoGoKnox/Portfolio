# Portfolio

Personal portfolio of **Samhitha Naidu** — computer science engineer, data analyst, baker, writer, explorer.

Built with **Vite + React + Tailwind**, animated with **framer-motion**, and styled in a dark + neon-lime aesthetic with pastel and plumpy-icon flourishes. Mobile responsive.

## Quick start

You'll need [Node.js 18+](https://nodejs.org/) installed (LTS is fine).

```bash
cd Portfolio
npm install
npm run dev
```

The site opens at <http://localhost:5173>.

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io). To wire it up:

1. Sign up for a free Formspree account.
2. Create a form whose destination is your Gmail (`b.samhithanaidu04@gmail.com`).
3. Copy the form ID (looks like `xrgjzqkv`).
4. Copy `.env.example` to `.env` and paste your ID:

   ```bash
   VITE_FORMSPREE_ID=xrgjzqkv
   ```

5. Restart `npm run dev`.

Without an ID set, the form renders with a friendly warning and submissions won't go anywhere.

## Resume download

The hero section has a **download resume** button that links to `/resume.pdf`. To enable it:

1. Drop your resume file at `Portfolio/public/resume.pdf` (it will be served from the site root).
2. That's it — the button automatically downloads it as `Samhitha-Naidu-Resume.pdf`.

Until the file exists, the button shows up but downloading 404s.

## Editing content

All copy lives in `src/data/`:

- `experience.js` — JLL IT Ops Analyst, JLL SDE Intern, Pragya, ISAC
- `projects.js` — Walky Talky, Plant Doctor, Phishy, ASL
- `achievements.js` — hackathon wins
- `skills.js` — mixed skill chips (single list)
- `education.js` — (unused on site; section removed from page)
- `extracurriculars.js` — U&I, NSS, Bhumi

Components live in `src/components/`. Hero photo is served from `public/profile.jpg`.

## Build

```bash
npm run build       # outputs to /dist
npm run preview     # local preview of the build
```

## Hosting note

JLL policy requires InfoSec approval before deploying to external infrastructure (Vercel, Netlify, GitHub Pages, etc.). For prototyping, run locally on `http://localhost:5173`.

## Tech

- React 18, Vite 5
- Tailwind CSS 3
- framer-motion
- @formspree/react
- lucide-react
