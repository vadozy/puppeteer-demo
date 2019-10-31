const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('01 Starting');
    const startTime = new Date().getTime();

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // ignoreDefaultArgs: ['--disable-extensions'],
    });
    console.log('02 puppeteer launched');

    const page = await browser.newPage();
    console.log('03 new page opened');

    await page.goto('http://pmtoolsdev.acadian-asset.com/pmtools/brinson/');
    console.log('04 navigated to brinson');

    await page.click('#accountdisp', {clickCount: 3}); // select all
    await page.type('#accountdisp', '161', {delay: 20});
    await page.keyboard.press('Enter');
    console.log('05 picked account');

    await page.click('#start_date', {clickCount: 3});
    await page.type('#start_date', '10/01/2019', {delay: 20});
    await page.keyboard.press('Enter');
    console.log('06 picked start date');

    await page.click('#end_date', {clickCount: 3});
    await page.type('#end_date', '10/03/2019', {delay: 20});
    await page.keyboard.press('Enter');
    console.log('07 picked end date');

    await page.click('#target_currency');
    await page.type('#target_currency', 'U', {delay: 20});
    await page.keyboard.press('Enter');
    console.log('08 picked target currency');

    await page.$eval( '#button_analyze', el => el.click() );
    console.log('09 clicked Analyze button');

    await page.waitForSelector('#brinson-summary-table > thead', { timeout: 60002 });
    console.log('10 Got Results');

    await page.click('#compounding_mode');
    await page.type('#compounding_mode', 'A', {delay: 20});
    await page.keyboard.press('Enter');
    console.log('11 picked Arithmetic compounding mode');

    await page.click('#unit');
    await page.type('#unit', 'b', {delay: 20});
    await page.keyboard.press('Enter');
    console.log('12 picked bps units');

    await browser.close();
    console.log(`Total run time: ${ (new Date().getTime() - startTime) / 1000 } seconds`);

  } catch (err) {
    console.log(`Error: ${err}`);
  }

})();
