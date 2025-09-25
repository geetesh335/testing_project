const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: 'https://www.techashtra.com/' });

  // Example of adding URLs to the sitemap
  smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  smStream.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
  smStream.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });

  smStream.end();

  // Save the sitemap to a file
  const sitemap = await streamToPromise(smStream).then((data) => data.toString());
  createWriteStream('./public/sitemap.xml').write(sitemap);
}

generateSitemap().then(() => console.log('Sitemap generated!'));
