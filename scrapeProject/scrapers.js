const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    //get the Xpath in the browser when clicking on the element, then copy -> Xpath
    const [el] = await page.$x("//*[@id=\"landingImage\"]");
    const src = await el.getProperty('src');
    const imageUrl = await src.jsonValue();

    const [el2] = await page.$x("//*[@id=\"productTitle\"]");
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x("//*[@id=\"priceblock_ourprice\"]");
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();

    console.log({imageUrl});
    console.log({title});
    console.log({price});

    browser.close();
}

scrapeProduct("https://www.amazon.de/AMD-Ryzen-3800x-Cache-Wraith/dp/B07SXMZLPJ/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33AHOZPKA35KT&dchild=1&keywords=amd+ryzen+7+3700x&qid=1603310549&quartzVehicle=93-256&replacementKeywords=amd+ryzen+3700x&sprefix=amd+%2Caps%2C162&sr=8-2");