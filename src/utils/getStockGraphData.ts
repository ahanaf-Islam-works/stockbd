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
  ];
  return data;
};
