const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///D:/%E9%A1%B9%E7%9B%AE/node/node-pdf/index.html', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.png', format: 'A4'});

  await browser.close();
})();