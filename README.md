# 🧗 The Wall — Crux & Crag Personal Blog

A high-performance, bouldering-themed personal blog built from zero to live deployment with **Astro**, **Tailwind CSS**, **MDX**, **View Transitions**, and **Pagefind**.

The site transforms personal writing into a bouldering gym wall:
- Every section is a route or "problem" on the wall.
- Navigation links are interactive climbing holds (jugs, crimps, slopers, pinches, pockets).
- Active holds are "chalked up" and clicks trigger kinetic chalk puff particles and directional climbing animations (UP for forward progress, DOWN for downclimbing, TRAVERSE for sibling sections).
- Long articles feature a summit reading progress indicator that triggers a "Topped out!" celebration at the finish.

---

## 🚀 Quick Start (Local Setup)

```bash
# Clone the repository
git clone https://github.com/<your-username>/the-wall-blog.git
cd the-wall-blog

# Install dependencies
npm install

# Start development server
npm run dev
# The blog will be available at http://localhost:4321
```

---

## ⚡ How to Write and Publish a New Post in < 2 Minutes

### Method 1: Using the interactive CLI generator
```bash
npm run new-post
```
This prompt asks for your title, category, grade (V0–V10), tags, and generates a pre-formatted MDX file inside `src/content/blog/`.

### Method 2: Manual Markdown / MDX File
Create a new file in `src/content/blog/your-post-slug.mdx`:

```mdx
---
title: "Sending My First V8 in the Rain"
description: "Why friction improves when the temperature drops, even under high humidity."
pubDate: 2026-10-08
category: "expeditions" # expeditions | beta-library | random-sends
tags: ["bouldering", "weather", "friction"]
grade: "V8"
featured: false
draft: false
location:
  name: "Bishop, California"
  country: "USA"
---
import Callout from '../../components/mdx/Callout.astro';
import PullQuote from '../../components/mdx/PullQuote.astro';

Your content goes here...

<Callout type="beta" title="Key Beta">
Keep your left heel locked onto the arête.
</Callout>
```

Then commit and push:
```bash
git add src/content/blog/
git commit -m "feat(content): add sending my first V8 post"
git push origin main
```
GitHub Actions automatically builds and deploys your new route to GitHub Pages!

---

## 🛠 Adding New Categories

To add a new category (e.g. `gear-reviews`):
1. Add the category name to `src/content.config.ts`:
   ```ts
   category: z.enum(['expeditions', 'beta-library', 'random-sends', 'gear-reviews'])
   ```
2. Add a navigation hold in `src/config/site.config.ts`:
   ```ts
   { name: "Gear Lab", href: "/gear-lab", holdType: "pinch", color: "#10b981", heightPercent: 60 }
   ```
3. Create the corresponding page `src/pages/gear-lab.astro`.

---

## 🎨 Changing Site Settings & Colours

All global metadata, author details, climbing ticks, and social links are centralized in `src/config/site.config.ts`.
Theme color tokens and rock textures are defined in `src/styles/global.css`.

---

## 💬 Optional Giscus Comments & Analytics

1. **Giscus (GitHub Discussions)**:
   - Enable Discussions in your GitHub repository.
   - Install the Giscus GitHub App.
   - Set `features.giscusComments = true` in `src/config/site.config.ts`.

2. **Custom Domain**:
   - In your repository settings under **Pages**, enter your custom domain (e.g. `blog.yourname.com`).
   - Add a CNAME DNS record pointing to `<username>.github.io`.

---

## 📄 License

- Code & Design: [MIT License](LICENSE)
- Writing & Media Content: © 2026 Abhishek. All rights reserved.
