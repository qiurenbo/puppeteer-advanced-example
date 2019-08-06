const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch();
	let page = await browser.newPage();
	await page.goto("https://www.w3schools.com/");

	const tryItSelector = 'a[href="/html/tryit.asp?filename=tryhtml_default"]';
	await page.click(tryItSelector);

	// wait new page to be loaded
	await page.waitFor(2000);

	// get all the pages
	const pages = await browser.pages();

	// change to new page
	page = pages[pages.length - 1];

	await page.screenshot({ path: "tryit.png", fullPage: true });

	// change back
	page = pages[pages.length - 2];

	await page.screenshot({ path: "w3schools.png", fullPage: true });
	await browser.close();
})();
