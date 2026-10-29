// Downloads client brand logos into public/logos/ for use as assets.
//
// NOTE: The original Clearbit Logo API (logo.clearbit.com) was shut down.
// This version uses Google's favicon service (no API key required), with
// DuckDuckGo's icon service as a fallback. Quality is favicon-grade
// (typically up to 256px) — swap in Logo.dev or a paid provider if you
// need full-resolution brand marks.
//
// Usage: node download-logos.js

import fs from 'fs';
import https from 'https';
import path from 'path';

const logos = [
  { name: 'nappadori', domain: 'nappadori.com' },
  { name: 'pdr', domain: 'pdrclinics.com' },
  { name: 'regius', domain: 'regiuscare.com' },
  { name: 'centerspread', domain: 'centerspread.pk' },
  { name: 'getvantage', domain: 'getvantage.co' },
  { name: 'samruddhi', domain: 'samruddhi.com' },
  { name: 'techguru', domain: 'techguru.com' },
  { name: 'athena', domain: 'athenahealth.com' },
  { name: 'mainstay', domain: 'mainstay.com' },
  { name: 'karma', domain: 'karma.com' },
];

const dir = path.join(process.cwd(), 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function fetchBuffer(url, redirectsLeft = 3) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ForemarkLogoBot/1.0)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirectsLeft > 0) {
          res.resume();
          return resolve(fetchBuffer(res.headers.location, redirectsLeft - 1));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}

async function download({ name, domain }) {
  const sources = [
    `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    `https://unavatar.io/${domain}?fallback=false`,
  ];
  for (const url of sources) {
    try {
      const buf = await fetchBuffer(url);
      // Ignore Google's 1x1 "no icon" placeholder
      if (buf.length < 100) throw new Error('placeholder response');
      fs.writeFileSync(path.join(dir, `${name}.png`), buf);
      console.log(`✓ ${name}.png  (${(buf.length / 1024).toFixed(1)} KB)  <- ${new URL(url).hostname}`);
      return true;
    } catch (err) {
      console.warn(`  · ${name}: ${url.split('?')[0]} failed (${err.message})`);
    }
  }
  console.error(`✗ ${name}: all sources failed`);
  return false;
}

let ok = 0;
for (const logo of logos) {
  if (await download(logo)) ok += 1;
}
console.log(`\nDone: ${ok}/${logos.length} logos downloaded → public/logos/`);
process.exit(ok === logos.length ? 0 : 1);
