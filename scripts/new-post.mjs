#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log('\n🧗 \x1b[33mSetting a New Route on The Wall...\x1b[0m\n');

  const title = (await question('Route Title (e.g. "Sending my first V8"): ')).trim();
  if (!title) {
    console.error('Title is required!');
    process.exit(1);
  }

  console.log('\nCategories:');
  console.log('1. expeditions (Travel stories & crags)');
  console.log('2. beta-library (Research, anatomy, book notes)');
  console.log('3. random-sends (Thoughts, tech, experiments)');
  const catChoice = (await question('Choose category (1/2/3, default 3): ')).trim();

  let category = 'random-sends';
  if (catChoice === '1') category = 'expeditions';
  if (catChoice === '2') category = 'beta-library';

  const grade = (await question('Route Grade (V0-V10, default V2): ')).trim().toUpperCase() || 'V2';
  const description = (await question('Short beta / description: ')).trim() || 'A new route logged on the wall.';
  const tagsInput = (await question('Tags (comma-separated, e.g. bouldering, training): ')).trim();
  const tags = tagsInput ? tagsInput.split(',').map((t) => `"${t.trim()}"`).join(', ') : '"bouldering"';

  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const today = new Date().toISOString().split('T')[0];

  const content = `---
title: "${title}"
description: "${description}"
pubDate: ${today}
category: "${category}"
tags: [${tags}]
grade: "${grade}"
featured: false
draft: false
---
import Callout from '../../components/mdx/Callout.astro';

Start writing your new route beta here...

<Callout type="beta" title="Key Beta">
Don't rush the dyno. Set your feet high first!
</Callout>
`;

  const targetPath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);
  fs.writeFileSync(targetPath, content, 'utf8');

  console.log(`\n\x1b[32m✔ Route successfully set at:\x1b[0m src/content/blog/${slug}.mdx\n`);
  rl.close();
}

main();
