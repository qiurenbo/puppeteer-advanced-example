

# 1. Instruction

This is a puppeteer example collection inspired by https://github.com/checkly/puppeteer-examples.

You can start your puppeteer journey from here.

# 2. Usage

```
git clone https://github.com/qiurenbo/puppeteer-advanced-example
cd puppeteer-advanced-example
npm i
node changePage/change-page-simple.js
```

# 3. Change Page Pages

## 3.1. Change Page Simple

You can use page.pages to get all the page. And then you can change the page reference to the tab or page you want.

[change page simple](./changePage/change-page-simple.js)

## 3.2. Change Page Graceful

You can use browser.waitForTarget to wait for the page (target) to be loaded. And then you can change the page reference to the tab or page you want.

[change page graceful](./changePage/change-page-graceful.js)

# 4. User Data Directory

[use userDataDir](./userDataDir/userDataDir.js)
