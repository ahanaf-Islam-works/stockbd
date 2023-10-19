import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
];

export default function MarketValue() {
  return (
    <Card>
      <Title>DSE Market Value</Title>
      <LineChart
        className="mt-6"
        data={chartdata}
        index="year"
        categories={["Export Growth Rate"]}
        colors={["emerald", "gray"]}
        yAxisWidth={40}
      />
    </Card>
  );
}
