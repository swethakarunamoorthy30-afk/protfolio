# Responsive Portfolio Website

A fully responsive, mobile-first personal portfolio for Swetha K, styled like a code
editor / terminal to reflect the "full stack developer" theme — no frameworks, just
semantic HTML5, CSS3 (Grid/Flexbox), and vanilla JavaScript.

## Features
- IDE-style navigation bar (tabs: `about.js`, `skills.json`, `projects.js`, `contact.sh`)
- Animated hero written as a JS object literal
- Scroll-aware active-tab highlighting (IntersectionObserver)
- Responsive layout down to mobile, with a collapsible nav menu
- Skills section styled as dependency/config cards
- Terminal-styled contact form with real client-side validation (name, email, message)
- Respects `prefers-reduced-motion`

## Project structure
```
portfolio-website/
├── index.html
├── style.css
└── script.js
```

## Run locally
No build tools needed — it's static HTML/CSS/JS.

```bash
# Option 1: just open it
open index.html      # macOS
start index.html      # Windows

# Option 2: serve it (recommended, avoids any local file quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize
- Update contact details and links in `index.html` (`#contact` section)
- Replace the `#` placeholders in `.project-card__links` with real GitHub/demo URLs
- Colors and fonts are defined as CSS custom properties at the top of `style.css`
  under `:root` — change them there to re-theme the whole site

## Deploy for free
- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch
- **Netlify / Vercel**: drag-and-drop the folder or connect the GitHub repo

## Uploading to GitHub
```bash
cd portfolio-website
git init
git add .
git commit -m "Responsive portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio-website.git
git push -u origin main
```
