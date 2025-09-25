import fs from "fs";

const domain = "https://sorosocket.com"; // change to your domain

// List your routes here or import from your router config
const routes = ["/", "/signin", "/signup", "/rooms", "/profile"];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) => `
  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === "/" ? "daily" : "monthly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
	)
	.join("")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemap, "utf8");
console.log("✅ sitemap.xml generated!");
