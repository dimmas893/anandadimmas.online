import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const sitemapPath = path.join(process.cwd(), 'sitemap.xml');
  const fileContent = fs.readFileSync(sitemapPath, 'utf8');
  res.setHeader('Content-Type', 'application/xml');
  res.send(fileContent);
}
