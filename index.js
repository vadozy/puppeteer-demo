const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://github.com/GoogleChrome/puppeteer');

  const element = await page.$(
    'a[href="https://github.com/smooth-code/jest-puppeteer"]'
  );

  await element.click();

  await page.waitForNavigation();

  // eslint-disable-next-line no-undef
  // await Promise.all([page.waitForNavigation(), element.click()]);

  const pageContent = await page.content();
  const found = pageContent.match(/Run your tests using Jest/gi);

  //console.log(pageContent);
  console.log(`Found: ${found}`);

  await browser.close();
})();
