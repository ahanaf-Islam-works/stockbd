import { Card, Title, LineChart } from "@tremor/react";
import { json } from "stream/consumers";

// // const graphData: {
//     index: string;
//     "value of stocks": number;
//     "price of stocks": string;
// }[]

// Type '({ index: string; "value of stocks": number; "price of stocks": string; } | { index: string; "price of stocks": string; "value of stocks"?: undefined; })[]' is not assignable to type 'StockGraphData[]'.
//   Type '{ index: string; "value of stocks": number; "price of stocks": string; } | { index: string; "price of stocks": string; "value of stocks"?: undefined; }' is not assignable to type 'StockGraphData'.
//     Type '{ index: string; "price of stocks": string; "value of stocks"?: undefined; }' is not assignable to type 'StockGraphData'.
//       Property '"value of stocks"' is optional in type '{ index: string; "price of stocks": string; "value of stocks"?: undefined; }' but required in type 'StockGraphData'.ts(2322)
// MarketValue.tsx(19, 3): The expected type comes from property 'chartdata' which is declared here on type 'IntrinsicAttributes & { chartdata: StockGraphData[]; }'
// (property) chartdata: StockGraphData[]

// // const graphData: ({
//     index: string;
//     "value of stocks": number;
//     "price of stocks": string;
// } | {
//     index: string;
//     "price of stocks": string;
//     "value of stocks"?: undefined;
// })[]

// <MarketValue chartdata={graphData} />

interface StockGraphData {
  index: string;
  "price of stocks": string;
}

export default function MarketValue({
  chartdata,
}: {
  chartdata: StockGraphData[];
}) {
  return (
    <Card>
      <Title>DSE Market Value</Title>
      <LineChart
        className="mt-6"
        data={chartdata}
        index="index"
        categories={["price of stocks"]}
        colors={["emerald", "gray"]}
        yAxisWidth={40}
        autoMinValue
        showXAxis={false}
      />
    </Card>
  );
}
