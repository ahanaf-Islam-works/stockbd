import puppeteer from "puppeteer";
import { TRPCError } from "@trpc/server";

// export const getStockGraph = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(
//     "https://dsebd.org/php_graph/monthly_graph_index.php?type=ds30&duration=12"
//   );

//   const graph = await page.evaluate(() => {
//     const script = document.querySelectorAll("script")[1];
//     const text = script.innerText;

//     const data = text.slice(
//       text.indexOf("Date,") + 12,
//       text.indexOf("Date,Trade\n") + 12 + 1000
//     );

//     const dataArr = data.split("\n")[1];
//     const dataArr2 = dataArr
//       .slice(1, dataArr.length - 1)
//       .split("+")
//       .map((data) => data.slice(1, data.length - 1));
//     dataArr2.pop();

//     const dataArr3 = dataArr2.map((data) => data.split(","));
//     const dateArr = dataArr3.map((data, index) =>
//       index === 0
//         ? data[0].replace(/"/g, "").replace(/\s/g, "")
//         : data[0].replace(/\\/g, "").trim().replace(/\s/g, "")
//     );

//     const valueArr = dataArr3.map((data) =>
//       Number(data[1].replace(/\\n/g, "").trim()).toFixed(2)
//     );

//     const graphY = Array.from(
//       document.querySelectorAll(".dygraph-axis-label.dygraph-axis-label-y")
//     ).map((div) => div.innerText);

//     const graphValue = graphY.map((value) => Number(value.replace(",", "")));

//     const graphDate = dateArr.map((date, index) => ({
//       index: date,
//       "value of stocks": graphValue[index],
//       "price of stocks": valueArr[index],
//     }));

//     return graphDate;
//   });

//   await browser.close();

//   return graph;
// };

export const getStockGraph = async () => {
  const data = [
    {
      index: "2022-10-25",
      "value of stocks": 2100,
      "price of stocks": "2243.73",
    },
    {
      index: "2022-10-26",
      "value of stocks": 2120,
      "price of stocks": "2249.16",
    },
    {
      index: "2022-10-27",
      "value of stocks": 2140,
      "price of stocks": "2265.81",
    },
    {
      index: "2022-10-30",
      "value of stocks": 2160,
      "price of stocks": "2245.28",
    },
    {
      index: "2022-10-31",
      "value of stocks": 2180,
      "price of stocks": "2226.71",
    },
    {
      index: "2022-11-01",
      "value of stocks": 2200,
      "price of stocks": "2235.77",
    },
    {
      index: "2022-11-02",
      "value of stocks": 2220,
      "price of stocks": "2244.15",
    },
    {
      index: "2022-11-03",
      "value of stocks": 2240,
      "price of stocks": "2252.99",
    },
    {
      index: "2022-11-06",
      "value of stocks": 2260,
      "price of stocks": "2258.83",
    },
    {
      index: "2022-11-07",
      "value of stocks": 2280,
      "price of stocks": "2245.96",
    },
    { index: "2022-11-08", "price of stocks": "2242.72" },
    { index: "2022-11-09", "price of stocks": "2231.25" },
    { index: "2022-11-10", "price of stocks": "2235.97" },
    { index: "2022-11-13", "price of stocks": "2213.49" },
    { index: "2022-11-14", "price of stocks": "2198.58" },
    { index: "2022-11-15", "price of stocks": "2183.04" },
    { index: "2022-11-16", "price of stocks": "2191.66" },
    { index: "2022-11-17", "price of stocks": "2199.91" },
    { index: "2022-11-20", "price of stocks": "2180.40" },
    { index: "2022-11-21", "price of stocks": "2177.41" },
    { index: "2022-11-22", "price of stocks": "2190.21" },
    { index: "2022-11-23", "price of stocks": "2183.19" },
    { index: "2022-11-24", "price of stocks": "2189.67" },
    { index: "2022-11-27", "price of stocks": "2202.39" },
    { index: "2022-11-28", "price of stocks": "2191.59" },
    { index: "2022-11-29", "price of stocks": "2200.68" },
    { index: "2022-11-30", "price of stocks": "2214.33" },
    { index: "2022-12-01", "price of stocks": "2216.13" },
    { index: "2022-12-04", "price of stocks": "2207.01" },
    { index: "2022-12-05", "price of stocks": "2198.57" },
    { index: "2022-12-06", "price of stocks": "2205.58" },
    { index: "2022-12-07", "price of stocks": "2207.24" },
    { index: "2022-12-08", "price of stocks": "2203.58" },
  ];
  return data;
};
