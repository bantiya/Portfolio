# Bhavya Antiya — React Portfolio

A responsive React + Vite portfolio inspired by the supplied design, with content drawn from Bhavya's resume.

## Run locally

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

Edit `src/main.jsx` for content and `src/style.css` for design. The resume is in `public/Bhavya-Antiya-Resume.pdf`. Project artwork is a labeled illustrative interface, not a screenshot of the original project. No testimonials or unsupported project URLs are included.

Features: responsive navigation, expandable project details, accessible FAQ accordions, resume access, and email / LinkedIn / GitHub links.

## GitHub Pages

In the GitHub repository, open Settings → Pages and select GitHub Actions as the source. Push to `main` to run `.github/workflows/deploy-pages.yml`. The workflow builds with `/Portfolio/` as the base path and deploys `dist/`. The default build and local development still use `/`.

Expected URL: https://bantiya.github.io/Portfolio/
