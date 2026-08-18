import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://www.fgco.in";
const lastmod = new Date().toISOString().slice(0, 10);

/** Keep in sync with frontend/src/data/seo-pages.ts */
const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/ceo", changefreq: "monthly", priority: "0.7" },
  { path: "/md", changefreq: "monthly", priority: "0.7" },
  { path: "/director", changefreq: "monthly", priority: "0.7" },
  { path: "/media", changefreq: "monthly", priority: "0.8" },
  { path: "/publications", changefreq: "monthly", priority: "0.6" },
  { path: "/technology", changefreq: "monthly", priority: "0.8" },
  { path: "/teaser", changefreq: "monthly", priority: "0.8" },
  { path: "/viera", changefreq: "monthly", priority: "0.8" },
  { path: "/automobiles", changefreq: "monthly", priority: "0.7" },
  { path: "/operations", changefreq: "monthly", priority: "0.6" },
  { path: "/awards", changefreq: "weekly", priority: "0.9" },
  { path: "/award-comes-to-you", changefreq: "weekly", priority: "0.85" },
  { path: "/sponsorship", changefreq: "monthly", priority: "0.7" },
  { path: "/nominate", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/foundation", changefreq: "monthly", priority: "0.75" },
  { path: "/terms", changefreq: "yearly", priority: "0.4" },
  { path: "/privacy", changefreq: "yearly", priority: "0.4" },
  { path: "/refund-policy", changefreq: "yearly", priority: "0.4" },
  { path: "/cancellation-policy", changefreq: "yearly", priority: "0.4" },
];

const urls = pages
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path === "/" ? "" : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const root = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(root, "../public/sitemap.xml"), xml);
console.log(`Wrote sitemap.xml with ${pages.length} URLs`);
