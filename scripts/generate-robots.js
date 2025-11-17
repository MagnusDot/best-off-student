const fs = require('fs');
const path = require('path');
require('dotenv').config();

const siteUrl = process.env.SITE_URL || 'https://your-docusaurus-site.example.com';
const baseUrl = process.env.BASE_URL || '/';
// Construire l'URL complète en enlevant le slash final de baseUrl s'il existe
const fullUrl = siteUrl + (baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl);
const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${fullUrl}/sitemap.xml
`;

const robotsPath = path.join(__dirname, '..', 'static', 'robots.txt');
fs.writeFileSync(robotsPath, robotsContent);
console.log(`✅ robots.txt généré avec URL complète: ${fullUrl}`);

