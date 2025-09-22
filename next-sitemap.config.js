/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.hexalt.fr", // ⚡ mets ton vrai domaine ici
  generateRobotsTxt: true, // génère aussi robots.txt
  sitemapSize: 7000,
};
