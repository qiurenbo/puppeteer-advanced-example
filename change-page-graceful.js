const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch();
	let page = await browser.newPage();
	await page.goto("https://www.w3schools.com/");

	const pageTarget = page.target(); // save as pageTarget
	const tryItSelector = 'a[href="/html/tryit.asp?filename=tryhtml_default"]';
	await page.click(tryItSelector);

	// wait new page to be loaded
	const newTarget = await browser.waitForTarget(
		target => target.opener() === pageTarget
	);

	const newPage = await newTarget.page(); //get the new page
	await newPage.waitForSelector("body"); //wait for page to be loaded

	await newPage.screenshot({ path: "tryit.png", fullPage: true });

	// change back
	await page.screenshot({ path: "w3schools.png", fullPage: true });
	await browser.close();
})();
