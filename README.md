# Portfolio

Personal portfolio of **Samhitha Naidu** — data analyst, software developer, baker, explorer, and more.

Built with **Vite + React + Tailwind CSS**, **framer-motion** for motion, and a dark + lime + pastel “plumpy” aesthetic. Layout is responsive for desktop and mobile.

**Repository:** [github.com/GoGoKnox/Portfolio](https://github.com/GoGoKnox/Portfolio)

---

## What you need on your machine

1. **[Node.js 18 or newer](https://nodejs.org/)** (LTS is recommended).  
   Check: `node --version` and `npm --version` in a terminal.

2. **[Git](https://git-scm.com/downloads)** (if you are cloning or pushing changes).  
   Check: `git --version`

---

## Get the code (first time)

If you do not have the folder yet:

```bash
git clone https://github.com/GoGoKnox/Portfolio.git
cd Portfolio
```

If you already have the project, open a terminal in the `Portfolio` folder (the one that contains `package.json`).

### Windows: if `node` or `git` is “not recognized”

- Restart the terminal (or VS Code / Cursor) after installing Node or Git.  
- Or refresh `PATH` for the current PowerShell session:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

---

## Install dependencies and run locally

From inside the `Portfolio` directory:

```bash
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser. The dev server supports hot reload: save a file and the page updates.

### Corporate network / SSL (`SELF_SIGNED_CERT_IN_CHAIN`)

On some corporate networks, `npm install` fails with a certificate error. Node can use the **Windows certificate store**:

**PowerShell (same session as `npm install`):**

```powershell
$env:NODE_OPTIONS = "--use-system-ca"
npm install
npm run dev
```

Use the same `NODE_OPTIONS` line before `npm install` whenever you are on that network.

---

## npm scripts

| Command           | What it does                                      |
|------------------|---------------------------------------------------|
| `npm run dev`    | Start dev server (default: http://localhost:5173) |
| `npm run build`  | Production build → output in `dist/`              |
| `npm run preview`| Serve the production build locally for a quick check |

---

## Contact form (Formspree)

The contact section uses [@formspree/react](https://formspree.io/). **By default** it posts to **https://formspree.io/f/mykogkzk** (form hash `mykogkzk` in `Contact.jsx`).

To use a **different** form:

1. Create a form at [formspree.io](https://formspree.io) and copy its ID.  
2. Copy `.env.example` to `.env` (never commit `.env`).  
3. Set `VITE_FORMSPREE_ID=your_other_id` and restart `npm run dev`.

The committed `.env.example` lists `mykogkzk` for reference.

---

## Static files (photo, resume, project images)

Files in `public/` are served from the **site root** (e.g. `public/resume.pdf` → `/resume.pdf`).

| File | Purpose |
|------|--------|
| `public/profile.jpg` | Hero / polaroid photo |
| `public/resume.pdf` | “Download resume” button (`/resume.pdf`) |
| `public/projects/*.jpg` | Project thumbnails (paths referenced in `src/data/projects.js`) |
| `public/favicon.svg` | Browser tab icon |

After replacing an image or PDF, save the file with the **same name** or update the paths in `src/data/projects.js` (and components if you hard-code a path).

---

## Where to edit what

### Copy and lists (easiest)

Most text lives in **`src/data/`**:

| File | Content |
|------|---------|
| `experience.js` | Jobs, dates, locations, bullets, skill tags |
| `projects.js` | Project titles, descriptions, images, tech tags |
| `achievements.js` | Competitions, dates, blurbs |
| `skills.js` | One mixed list of skill chips |
| `extracurriculars.js` | Community / volunteering cards |
| `education.js` | Present but **not** shown on the page (section removed from `App.jsx`) |

Edit in any text editor, save, and refresh the dev page if hot reload does not pick it up.

### Layout, sections, styling

| Location | Role |
|----------|------|
| `src/App.jsx` | Which sections appear and in what order |
| `src/components/*.jsx` | Section UI (Hero, Nav, Projects, etc.) |
| `src/index.css` | Global CSS, Tailwind layers, utility classes |
| `tailwind.config.js` | Colors, fonts, animations |

### Environment

| File | Role |
|------|------|
| `.env` | Local secrets (Formspree ID) — **do not commit** |
| `.env.example` | Template only (safe to commit) |

---

## Git: commit and push to this repo

Configure your name and email once (use the identity you want on GitHub):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Typical workflow after you change files:

```bash
cd Portfolio
git status
git add -A
git commit -m "Short description of what you changed"
git pull origin main
git push origin main
```

- If `git pull` reports conflicts, resolve them in the listed files, then `git add` those files and `git commit` before pushing again.
- **HTTPS push** usually needs a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) as the password (not your GitHub account password).

---

## Hosting (important for some workplaces)

Some employers require security approval before deploying to public hosting (Vercel, Netlify, GitHub Pages, etc.). Use **localhost** for personal prototyping unless you have approval. Building with `npm run build` is fine locally; uploading `dist/` to external infrastructure is a separate decision.

---

## Tech stack

- React 18, Vite 5  
- Tailwind CSS 3, PostCSS  
- framer-motion  
- @formspree/react  
- lucide-react  

---

## Privacy note

This repo may contain a **resume PDF**, **profile photo**, and **project screenshots**. If the repository is **public**, anyone on the internet can view them. Use private repo settings or remove/replace assets if you need to limit exposure.
