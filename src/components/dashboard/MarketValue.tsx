import { Card, Title, LineChart } from "@tremor/react";

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
