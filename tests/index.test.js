const timeout = 5000;

describe(
  'my index.js test',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('https://github.com/GoogleChrome/puppeteer');
    }, timeout);

    it('should find a link', async () => {
      const element = await page.$(
        'a[href="https://github.com/smooth-code/jest-puppeteer"]'
      );
      const innerText = await page.evaluate(el => el.innerText, element);
      expect(innerText).toBe('jest-puppeteer');
    });

    it('can navigate to the new page', async () => {
      const element = await page.$(
        'a[href="https://github.com/smooth-code/jest-puppeteer"]'
      );

      await element.click();

      await page.waitForNavigation();

      // eslint-disable-next-line no-undef
      // await Promise.all([page.waitForNavigation(), element.click()]);

      const pageContent = await page.content();
      const found = pageContent.match(/Run your tests using Jest/gi);
      expect(found).toBeTruthy();
    });
  },
  timeout
);
