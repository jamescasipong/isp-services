import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { pipeline } from "stream/promises"; // Import pipeline

// Update the links array with your actual routes
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/features", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/signup", changefreq: "monthly", priority: 0.8 },
  { url: "/signin", changefreq: "monthly", priority: 0.8 },
  { url: "/home", changefreq: "daily", priority: 1.0 },
  { url: "/resetpage", changefreq: "monthly", priority: 0.8 },
  { url: "/adminhome", changefreq: "weekly", priority: 0.6 },
  // Add more routes if necessary
];

const sitemap = new SitemapStream({
  hostname: "https://optinet-official.vercel.app",
});

const writeStream = createWriteStream("./public/sitemap.xml");

// Use pipeline to handle stream piping and promise resolution
pipeline(sitemap, writeStream)
  .then(() => console.log("Sitemap created!"))
  .catch(console.error);

links.forEach((link) => sitemap.write(link));
sitemap.end();
