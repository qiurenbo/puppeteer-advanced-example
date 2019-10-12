const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({
		userDataDir:
			"C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\User Data"
	});
	let page = await browser.newPage();
	await page.goto("https://www.baidu.com/");

	await page.screenshot({ path: "baidu.png", fullPage: true });
	await browser.close();
})();
