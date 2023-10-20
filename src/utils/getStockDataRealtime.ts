import puppeteer from "puppeteer";

const getRealTimeStock = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://dsebd.org/");
  const result = await page.evaluate(() => {
    const elements = document.querySelectorAll("marquee table tr td .abhead");
    let data = [];
    for (let element of elements) {
      const innerText = (element as HTMLElement).innerText;
      const imgElement = element.querySelector("img");
      const src = imgElement ? imgElement.getAttribute("src") : null;
      const changesymbol =
        src === "assets/imgs/tkupdown.gif"
          ? "nutral"
          : src === "assets/imgs/tkup.gif"
          ? "up"
          : "down";
      data.push({
        name: innerText.split(/\s+/)[0].trim(),
        lastTradedPrice: innerText.split(/\s+/)[1].trim(),
        priceChange: innerText.split(/\s+/)[2].trim(),
        changeSymbol: changesymbol,
        changePercentage: innerText.split(/\s+/)[3].trim().slice(0, -1),
      });
    }
    return data;
  });
  await browser.close();
  return result;
};

export default getRealTimeStock;
