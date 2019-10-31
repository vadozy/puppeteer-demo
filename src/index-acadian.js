const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Debug 01');

    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // ignoreDefaultArgs: ['--disable-extensions'],
    });

    console.log('Debug 02');
    const page = await browser.newPage();

    console.log('Debug 03');
    await page.goto('https://github.com/GoogleChrome/puppeteer');

    const element = await page.$(
      'a[href="https://github.com/smooth-code/jest-puppeteer"]'
    );

    await element.click();

    console.log('Debug 04');
    await page.waitForNavigation();
    console.log('Debug 05');

    // eslint-disable-next-line no-undef
    // await Promise.all([page.waitForNavigation(), element.click()]);

    const pageContent = await page.content();
    const found = pageContent.match(/Run your tests using Jest/gi);

    //console.log(pageContent);
    console.log(`Found: ${found}`);

    await browser.close();
    console.log('Debug 06');
  } catch (err) {
    console.log(`Error: ${err}`);
  }
})();
