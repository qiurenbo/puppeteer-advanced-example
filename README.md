# puppeteer-advanced-example

## Instruction

This is a puppeteer example collection inspired by https://github.com/checkly/puppeteer-examples.

You can start your puppeteer journey from here.

## Usage

```
git clone https://github.com/qiurenbo/puppeteer-advanced-example
cd puppeteer-advanced-example
npm i
node MultiplePages/change-page-simple.js
```

## Index

1. [MultiplePages](https://github.com/qiurenbo/puppeteer-advanced-example#multiple-pages)

   - [Change Page Simple](https://github.com/qiurenbo/puppeteer-advanced-example#change-page-simple)
   - [Change Page Graceful](https://github.com/qiurenbo/puppeteer-advanced-example#change-page-graceful)

## Multiple Pages

### Change Page Simple

You can use page.pages to get all the page. And then you can change the page reference to the tab or page you want.

[change page simple](https://github.com/qiurenbo/puppeteer-advanced-example/blob/master/MultiplePages/change-page-simple.js)

### Change Page Graceful

You can use browser.waitForTarget to wait for the page (target) to be loaded. And then you can change the page reference to the tab or page you want.

[change page graceful](https://github.com/qiurenbo/puppeteer-advanced-example/blob/master/MultiplePages/change-page-graceful.js)
