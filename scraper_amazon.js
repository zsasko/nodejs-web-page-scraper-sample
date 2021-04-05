const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

async function scrap(jobUrl) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(jobUrl);
  const bodyHTML = await page.content();
  await page.close();
  await browser.close();
  const selector = cheerio.load(bodyHTML);
  //
  const body = selector("body");
  const title = body.find("#productTitle").html();
  const price = body.find("#priceblock_ourprice").html();
  const seller = body.find("#sellerProfileTriggerId").html();
  const image = body.find("#landingImage").attr("src");
  const features = body.find("#feature-bullets").html();
  //
  const product = {
    title: title,
    price: price,
    seller: seller,
    image: image,
    features: features,
  };
  return product;
}

module.exports.scrap = scrap;
