# Spyros Gavriil — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans + Geist Mono (via next/font)
- **Deployment**: Vercel

---

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (single-page layout)
├── components/
│   ├── Header.tsx        # Sticky navigation header
│   ├── Hero.tsx          # Hero/intro section
│   ├── Projects.tsx      # "Selected Engineering Work" section
│   ├── ProjectCard.tsx   # Reusable project card component
│   ├── Experience.tsx    # Work experience section
│   ├── Skills.tsx        # Technical stack section
│   └── Footer.tsx        # Contact + footer
└── data/
    └── profile.ts        # All personal data, projects, experience, skills
```

**To update your content**, edit `src/data/profile.ts` — all copy and data lives there.

---

## Adding your CV

Place your CV PDF at:

```
public/Spyros_Gavriil_CV.pdf
```

The download link in the Hero section is already wired to `/Spyros_Gavriil_CV.pdf`.

---

## Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2: Vercel Dashboard

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project**.
3. Import the repository.
4. Leave build settings as default (Vercel auto-detects Next.js).
5. Click **Deploy**.

Your site will be live at `your-project.vercel.app`. You can add a custom domain in the Vercel dashboard.

---

## Customisation Notes

- **Palette**: CSS variables are defined in `src/app/globals.css` and mirrored in `tailwind.config.ts`.
- **Fonts**: Using Geist via `next/font/google`. Swap in `src/app/layout.tsx` if you want a different font.
- **Projects**: Add/remove entries in `src/data/profile.ts` → `projects` array. Set `highlight: true` for full-width cards, `false` for the side-by-side grid.
- **Experience**: Edit `src/data/profile.ts` → `experience` array.
- **Skills**: Edit `src/data/profile.ts` → `skillGroups` array.

---

## Assumptions

- CV PDF is not included; place it at `public/Spyros_Gavriil_CV.pdf`.
- GitHub links for personal projects point to your GitHub profile (`https://github.com/sgavriil01`). Update individual project links in `profile.ts` once repos are public.
- No analytics, cookie banners, or tracking included by default.
- No dark/light toggle — site is dark-only per design spec.
