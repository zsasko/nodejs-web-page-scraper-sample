const express = require("express");
const app = express();
const port = 3000;
const scraperAmazon = require("./scraper_amazon");

app.get("/", async (req, res) => {
  const url = "https://www.amazon.com/Fit-Over-Blue-Light-Glasses/dp/B08T14RV4M";
  const product = await scraperAmazon.scrap(url);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
