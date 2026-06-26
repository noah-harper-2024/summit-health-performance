# Summit Health & Performance — Website

A fast, clean website for Summit Health & Performance (Dr. Seth Graham), built with
[Astro](https://astro.build). Whites + blues, mobile-friendly, and easy to maintain.

## Quick start

```bash
npm install      # one time
npm run dev      # start a local preview at http://localhost:4321
npm run build    # produce the production site in /dist
npm run preview  # preview the production build locally
```

You need [Node.js](https://nodejs.org) 18+ installed.

## ✍️ How to add a new blog post (the easy part)

1. Go to the `src/content/blog/` folder.
2. Copy `_TEMPLATE.md` and rename it to something URL-friendly, e.g.
   `return-to-running-after-injury.md`. **The file name becomes the web address**
   (`/blog/return-to-running-after-injury/`).
3. Fill in the title, description, and date at the top, then write your post in Markdown below.
4. Set `draft: false`.
5. Save. The post shows up on the blog automatically — no other files to touch.

To add a photo to a post, drop the image in `src/content/blog/` and set
`heroImage: ./your-image.jpg` in the post's frontmatter.

## 🔧 Where to change things

| What you want to change | File |
| --- | --- |
| Booking link, phone, email, address, hours, Instagram | `src/data/site.ts` |
| Navigation menu items | `src/data/site.ts` (`NAV_LINKS`) |
| Colors, fonts, spacing | `src/styles/global.css` (top `:root` block) |
| Logo | replace `public/images/logo.png` |
| Home page | `src/pages/index.astro` |
| About / Services / Contact pages | `src/pages/about.astro`, `services.astro`, `contact.astro` |
| Blog post layout | `src/layouts/BlogPost.astro` |

> **The "Book Now" buttons** all come from one component (`src/components/BookNow.astro`)
> and point at the link in `src/data/site.ts`. Change it in that one place and every button
> updates.

## 🚀 Deploying (Netlify or Vercel)

This is a static site, so it works on any modern host. Easiest path:

1. Push this folder to a GitHub repo.
2. In **Netlify** or **Vercel**, "Import" the repo.
   - Build command: `npm run build`
   - Publish/output directory: `dist`
   - (A `netlify.toml` is already included for Netlify.)
3. Add the custom domain (e.g. `thesummitchiropractic.com`) in the host's dashboard.

Before going live, update the `site` URL in `astro.config.mjs` and the `Sitemap` line in
`public/robots.txt` to the final domain.

## Tech

- **Astro 5** static site generator
- Markdown blog via Astro Content Collections
- Auto-generated sitemap (`@astrojs/sitemap`) and RSS feed (`/rss.xml`)
- SEO meta tags + LocalBusiness structured data built into every page
